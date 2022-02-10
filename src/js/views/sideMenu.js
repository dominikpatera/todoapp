class SideMenuView {
	_sidemenu = document.querySelector('.sidemenu');
	_overlay = document.querySelector('.overlay');
	_listeners = [...document.querySelectorAll('.header__menu'), this._overlay];

	constructor() {
		this._addHandlerClick();
	}

	_addHandlerClick() {
		const self = this;
		this._listeners.forEach((el) =>
			el.addEventListener('click', function () {
				self._sidemenu.classList.toggle('sidemenu__hidden');
				self._overlay.classList.toggle('overlay__hidden');
			})
		);
	}
}

export default new SideMenuView();
