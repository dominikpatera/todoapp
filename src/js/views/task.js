import View from './View.js';

/**
 * Class for managing view of the task
 */
class TaskView extends View {
	// Sidemenu leements
	_sidemenu = document.querySelector('.sidemenu');
	_overlay = document.querySelector('.overlay');

	// View elements
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

	/**
	 * Listening if a task is solved
	 *
	 * @param {function} handler
	 */
	addHandlerSolved(handler) {
		this._btnSolveTask.addEventListener('click', function (e) {
			handler();
		});
	}

	/**
	 * Listening if a task is going to be edited
	 */
	addHandlerEdit() {
		const self = this;
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.task__text');
			if (!btn) return;
			self._addHandlerTaskChanged();
		});
	}

	/**
	 * Listening if a task is going to be saved
	 */
	addHandlerSave(handler) {
		const self = this;
		this._btnSaveTask.addEventListener('click', function (e) {
			handler(document.querySelector('.task__text--area').value, self._data.id);
		});
	}

	/**
	 * Listening if something in task changed
	 * if yes, that allow saving
	 */
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

	/**
	 * Listening if taks is going to be saved;
	 *
	 * @param {function} handler
	 */
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

	/**
	 * Generating markup for task
	 *
	 * @returns {string} markup
	 */
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
