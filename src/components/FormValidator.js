export class FormValidator {
    constructor(formVariables, form) {
        this._formSelector = formVariables.formSelector;
        this._inputSelector = formVariables.inputSelector;
        this._submitButtonSelector = formVariables.submitButtonSelector;
        this._inactiveButtonClass = formVariables.inactiveButtonClass;
        this._inputErrorClass = formVariables.inputErrorClass;
        this._errorClass = formVariables.errorClass;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners();
    }

    _setEventListeners () {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButton();
            });
        });
    }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError (inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError (inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
    };

    _hasInvalidInputs () {
        return this._inputList.some(item => !item.checkValidity());
    }

    _enableButton () {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute("disabled", false)
    }

    _disableButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute("disabled");
    }

    _toggleButton() {
        if(this._hasInvalidInputs()) {
            this._enableButton();
        } else {
            this._disableButton();
        };
    }

    resetForm() {
        this._inputList.forEach((input) => {this._hideInputError(input)});
        this._toggleButton();
        //this._submitButton.classList.toggle(this._inactiveButtonClass);
        //this._submitButton.disabled ? this._submitButton.setAttribute("disabled", false) : this._submitButton.removeAttribute("disabled");
    }
}