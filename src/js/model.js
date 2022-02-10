export const state = {
	task: {},
	tasks: [],
	query: '',
};

const init = function () {
	const storage = localStorage.getItem('tasks');
	if (storage) state.tasks = JSON.parse(storage);
};

const persistTasks = function () {
	localStorage.setItem('tasks', JSON.stringify(state.tasks));
};

export const createTask = function (newTask) {
	const task = {
		id: Number(Date.now().toString().slice(-9)),
		task: newTask.trim(),
	};

	state.task = task;
	state.tasks.push(task);

	persistTasks();
};

export const updateTask = function (id, task) {
	// Update task
	const index = state.tasks.findIndex((el) => el.id === id);
	state.tasks[index].task = task.trim();
	// Update local storage
	persistTasks();
};

export const solveTask = function (id = state.task.id) {
	// Delete task
	const index = state.tasks.findIndex((el) => el.id === id);
	state.tasks.splice(index, 1);
	state.task = state.task.id === id ? {} : state.task;

	// Update local storage
	persistTasks();
};

export const openTask = function (id) {
	state.task = state.tasks.find((task) => task.id === id);
};

init();
