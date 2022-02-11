import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import model
import * as model from './model.js';

// Import views
import sideMenuView from './views/sideMenu';
import navView from './views/nav';
import taskListView from './views/taskList';
import taskView from './views/task';

/**
 * Init function
 */
const init = function () {
	removeEmptyTasks();
	resizable();
	model.openTask(model.state.tasks.at(-1)?.id);

	taskListView.render(model.state);
	taskView.render(model.state.task);
	navView.render(model.state);

	taskListView.addHandlerClick(controlOpenTask);
	taskListView.addHandlerSolve(controlSolveTask);
	taskListView.addHandlerSearch(controlSearchTask);

	taskView.addHandlerSolved(controlSolveTask);
	taskView.addHandlerCreateTask(controlCreateTask);
	taskView.addHandlerEdit();
	taskView.addHandlerSave(controlSaveTask);
};

/**
 * Handler for an empty creating a task
 */
const controlCreateTask = function () {
	model.createTask('');

	// Render task
	taskView.render(model.state.task);

	// Render tasks
	taskListView.render(model.state);
};

/**
 * Handler for saving a task
 *
 * @param {string} text
 * @param {number} id
 */
const controlSaveTask = function (text, id = undefined) {
	// If its existing task
	if (id) {
		if (text.length > 0) model.updateTask(id, text);
		// If task is having some content then update it
		else model.solveTask(id); // Otherwise delete (solve) the task
	} else {
		// If not create a task
		model.createTask(text);
	}

	model.state.task =
		Object.keys(model.state.task).length === 0
			? model.state.tasks[0]
			: model.state.task;

	// Render task
	taskView.render(model.state.task);
	navView.render(model.state);

	// Render tasks
	taskListView.render(model.state);
};

/**
 * Solving (removing) all empty tasks
 */
const removeEmptyTasks = function () {
	model.state.tasks
		.filter((task) => task.task.length <= 0)
		.forEach((task) => model.solveTask(task.id));
};

/**
 * Handler for opening a task
 *
 * @param {number} id
 */
const controlOpenTask = function (id) {
	removeEmptyTasks();
	// Opening a task
	model.openTask(id);
	taskView.render(model.state.task);
	taskListView.render(model.state);
	navView.render(model.state);
};

/**
 * Handler for saving a task
 */
const controlSolveTask = function () {
	// Solving a task
	model.solveTask();
	// Opening the newest task
	model.openTask(model.state.tasks.at(-1)?.id);
	// Render tasks
	taskListView.render(model.state);

	// Rerender task window
	taskView.render(model.state.task);
	navView.render(model.state);
};

/**
 * Handler for searching between tasks
 *
 * @param {string} text
 */
const controlSearchTask = function (text) {
	// Saving query into as tate
	model.state.query = text;
	// Rendering tasks that match the search
	taskListView.render(model.state);
};

/**
 * Managing height on mobile devices
 */
const resizable = function () {
	const myResizeFunction = function () {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	};
	if (window.attachEvent) {
		window.attachEvent('onresize', function () {
			myResizeFunction();
		});
	} else if (window.addEventListener) {
		window.addEventListener(
			'resize',
			function () {
				myResizeFunction();
			},
			true
		);
	} else {
	}
	if (typeof Event === 'function') {
		window.dispatchEvent(new Event('resize'));
	} else {
		const evt = window.document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(evt);
	}
};

init();
