// Application state
export const state = {
	task: {},
	tasks: [],
	query: '',
};

/**
 * Initialization function
 */
const init = function () {
	const storage = localStorage.getItem('tasks');
	if (storage) state.tasks = JSON.parse(storage);
};

/**
 * Saving tasks into local storage
 */
const persistTasks = function () {
	localStorage.setItem('tasks', JSON.stringify(state.tasks));
};

/**
 * Creates a new task
 *
 * @param {string} newTask
 */
export const createTask = function (newTask) {
	// Task object creation
	const task = {
		id: Number(Date.now().toString().slice(-9)),
		task: newTask.trim(),
	};

	// Changing state
	state.task = task;
	state.tasks.push(task);

	// Update local storage
	persistTasks();
};

/**
 * Updating task
 *
 * @param {number} id
 * @param {string} task
 */
export const updateTask = function (id, task) {
	// Update task
	const index = state.tasks.findIndex((el) => el.id === id);
	state.tasks[index].task = task.trim();
	// Update local storage
	persistTasks();
};

/**
 * Marking task as solved (deleting from state and local storage)
 *
 * @param {number} id
 */
export const solveTask = function (id = state.task.id) {
	// Delete task
	const index = state.tasks.findIndex((el) => el.id === id);
	state.tasks.splice(index, 1);
	state.task = state.task.id === id ? {} : state.task;

	// Update local storage
	persistTasks();
};

/**
 * Marking which task is currently active
 *
 * @param {number} id
 */
export const openTask = function (id) {
	state.task = state.tasks.find((task) => task.id === id);
};

init();
