import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }
  
    _getInputValues() {
        this._inputValues = this._inputList.map((inputElement) => {return inputElement.value});
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
  }