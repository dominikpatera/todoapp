import View from './View';

class CreateTaskView extends View {
	_parentElement = document.querySelector('.create');
	_message = 'Task was successfully created!';

	_window = document.querySelector('.create-task-window');
	_overlay = document.querySelector('.overlay');
	_btnOpen = document.querySelector('.btn--create');
	_btnClose = document.querySelector('.btn--close-modal');

	constructor() {
		super();
		// this._addHandlerShowWindow();
		// this._addHandlerHideWindow();
	}

	toggleWindow() {
		this._overlay.classList.toggle('hidden');
		this._window.classList.toggle('hidden');
	}

	_addHandlerShowWindow() {
		// this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
		const self = this;
		this._btnOpen.addEventListener('click', function () {
			self.update();
			self.toggleWindow();
		});
	}

	_addHandlerHideWindow() {
		this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
		this._overlay.addEventListener('click', this.toggleWindow.bind(this));
	}

	addHandlerCreate(handler) {
		const self = this;
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			const dataArr = [...new FormData(this)];
			const data = Object.fromEntries(dataArr);
			const id = self._parentElement.querySelector('.create__btn').dataset.id;
			if (!id) handler(data.task);
			else handler(data.task, Number(id));
		});
	}

	_generateMarkup() {
		return `
				<h3 class="create__heading">${!this._data ? 'Nový úkol' : 'Upravit úkol'}</h3>
				<textarea name="task">${!this._data ? '' : this._data.task}</textarea>
			<button class="btn create__btn" data-id="${!this._data ? '' : this._data.id}">
				<span>${!this._data ? 'Vytvořit' : 'Upravit'}</span>
			</button>
		`;
	}
}

export default new CreateTaskView();
