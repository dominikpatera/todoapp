import View from './View.js';

/**
 * Class for managing view of the task list
 */
class TaskListView extends View {
	// Sidemenu leements
	_sidemenu = document.querySelector('.sidemenu');
	_overlay = document.querySelector('.overlay');

	// View elements
	_parentElement = document.querySelector('.tasks');
	_parentElements = [...document.querySelectorAll('.tasks')];
	_searches = document.querySelectorAll('.search__field');
	_errorMessage = 'Nemáte žádné úkoly. Svůj první úkol můžete založit zde.';
	_message = '';

	/**
	 * Overwriten render function
	 *
	 * @param {json} data
	 * @param {boolean} render
	 */
	render(data, render = true) {
		this._data = data;
		const markup = this._generateMarkup();

		if (!render) return markup;

		this._clear();
		this._parentElements.forEach((el) =>
			el.insertAdjacentHTML('afterbegin', markup)
		);
	}

	_clear() {
		this._parentElements.forEach((el) => (el.innerHTML = ''));
	}

	addHandlerClick(handler) {
		const self = this;
		this._parentElements.forEach((el) =>
			el.addEventListener('click', function (e) {
				e.preventDefault();
				const task = e.target.closest('.preview');
				if (!task) return;
				self._sidemenu.classList.add('sidemenu__hidden');
				self._overlay.classList.add('overlay__hidden');
				handler(Number(task.dataset.id));
			})
		);
	}

	addHandlerSolve(handler) {
		this._parentElements.forEach((el) =>
			el.addEventListener('click', function (e) {
				e.preventDefault();
				const btn = e.target.closest('.preview_btn--solved');
				if (!btn) return;
				handler();
			})
		);
	}

	addHandlerSearch(handler) {
		const self = this;
		this._searches.forEach((el) =>
			el.addEventListener('input', function (e) {
				const { value } = e.target;
				self._searches.forEach((search) => {
					search.value = value;
				});
				handler(value);
			})
		);
	}

	_generateMarkup() {
		const tasks = [...this._data.tasks];
		return tasks
			.reverse()
			.filter(
				(task) =>
					task.task.toLowerCase().includes(this._data.query.toLowerCase()) &&
					task.task.length > 0
			)
			.map(
				(result) => `
          <li class="preview" data-id="${result.id}">
            <a class="preview__link ${
							result.id === this._data.task.id ? 'preview__link--active' : ''
						}" href="">
						<button class="btn preview_btn--solved">
								<i class="fa-solid fa-check"></i>
							</button>
              <div class="preview__content">
                <p class="preview__text">${result.task}</p>
              </div>
            </a>
          </li>
      `
			)
			.join('');
	}
}

export default new TaskListView();
