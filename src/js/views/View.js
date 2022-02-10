export default class View {
	_data;

	render(data, render = true) {
		if (
			!data ||
			Object.keys(data).length === 0 ||
			(Array.isArray(data) && data.length === 0)
		)
			return this.renderError();

		this._data = data;
		const markup = this._generateMarkup();

		if (!render) return markup;

		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	renderError(message = this._errorMessage) {
		const markup = `
      <div class="error">
        <div>
        </div>
        <p>${message}</p>
      </div>
    `;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	renderMessage(message = this._message) {
		const markup = `
      <div class="message">
        <div>
        </div>
        <p>${message}</p>
      </div>
    `;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}
