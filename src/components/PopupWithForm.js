import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor (popup, handleFormSubmit) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._popup.querySelector('.popup__submit-button');
        this._defaultButtonTextValue = this._submitButton.value;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }
  
    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => inputValues[input.name] = input.value);
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.value = 'Сохранение...';
        } else {
            this._submitButton.value = this._defaultButtonTextValue;
        }
    }
  }