import View from './View.js';

class TaskView extends View {
	_sidemenu = document.querySelector('.sidemenu');
	_overlay = document.querySelector('.overlay');

	_parentElement = document.querySelector('.task');
	_btnsCreateTask = document.querySelectorAll('.btn--create');
	_btnSaveTask = document.querySelector('.btn--save');
	_btnSolveTask = document.querySelector('.btn--solved');
	_errorMessage = 'Nemáš žádné úkoly. 😊';
	_message = '';

	constructor() {
		super();
		this._addHandlerTaskChanged();
	}

	addHandlerSolved(handler) {
		this._btnSolveTask.addEventListener('click', function (e) {
			handler();
		});
	}

	addHandlerEdit() {
		const self = this;
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.task__text');
			if (!btn) return;
			self._addHandlerTaskChanged();
		});
	}

	addHandlerSave(handler) {
		const self = this;
		this._btnSaveTask.addEventListener('click', function (e) {
			handler(document.querySelector('.task__text--area').value, self._data.id);
		});
	}

	_addHandlerTaskChanged() {
		const self = this;
		document
			.querySelector('.task__text--area')
			?.addEventListener('input', function (e) {
				this.dataset.changed = e.target.value.length > 0;
				if (this.dataset.changed) {
					self._btnSaveTask.closest('.nav__item').classList.remove('d-none');
					self._btnSolveTask.closest('.nav__item').classList.add('d-none');
				}
			});
	}

	addHandlerCreateTask(handler) {
		const self = this;
		this._btnsCreateTask.forEach((btn) =>
			btn.addEventListener('click', function () {
				handler();
				document.querySelector('.task__text--area').focus();
				self._btnSaveTask.closest('.nav__item').classList.remove('d-none');
				self._btnSolveTask.closest('.nav__item').classList.add('d-none');
				self._sidemenu.classList.add('sidemenu__hidden');
				self._overlay.classList.add('overlay__hidden');
			})
		);
	}

	_generateMarkup() {
		this._btnSaveTask.closest('.nav__item').classList.add('d-none');
		this._btnSolveTask.closest('.nav__item').classList.remove('d-none');
		return `
        <div class="task__text">
          <textarea spellcheck="false" class="task__text--area" data-changed="false" placeholder="Zde můžete začít psát váš úkol...">${this._data.task}</textarea>
        </div>
    `;
	}
}

export default new TaskView();
