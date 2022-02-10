import * as model from './model.js';

// Import views
import sideMenuView from './views/sideMenu';
import navView from './views/nav';
import taskListView from './views/taskList';
import taskView from './views/task';

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

const controlCreateTask = function (task, id = undefined) {
	model.createTask('');

	// Render task
	taskView.render(model.state.task);

	// Render tasks
	taskListView.render(model.state);
};

const controlSaveTask = function (text, id = undefined) {
	// Save data
	if (id) {
		if (text.length > 0) model.updateTask(id, text);
		else model.solveTask(id);
	} else {
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

const removeEmptyTasks = function () {
	model.state.tasks
		.filter((task) => task.task.length <= 0)
		.forEach((task) => model.solveTask(task.id));
};

const controlOpenTask = function (id) {
	removeEmptyTasks();
	model.openTask(id);
	taskView.render(model.state.task);
	taskListView.render(model.state);
	navView.render(model.state);
};

const controlSolveTask = function () {
	model.solveTask();
	model.openTask(model.state.tasks.at(-1)?.id);
	// Render tasks
	taskListView.render(model.state);

	// Rerender task window
	taskView.render(model.state.task);
	navView.render(model.state);
};

const controlSearchTask = function (text) {
	model.state.query = text;
	taskListView.render(model.state);
};

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
