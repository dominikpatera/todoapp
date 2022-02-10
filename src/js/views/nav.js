/**
 * Class that manages the state of nav buttons
 */
class NavView {
	_btnsCreateTask = document.querySelectorAll('.btn--create');
	_btnSaveTask = document.querySelector('.btn--save');
	_btnSolveTask = document.querySelector('.btn--solved');

	render(data) {
		this._data = data;
		if (this._data.tasks.length > 0) return;

		this._btnSaveTask.closest('.nav__item').classList.add('d-none');
		this._btnSolveTask.closest('.nav__item').classList.add('d-none');
	}
}

export default new NavView();
