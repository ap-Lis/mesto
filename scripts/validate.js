const formVariables = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function enableValidation({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
    setEventListeners(formElement, rest);
    });
}

function setEventListeners (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest} ) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, rest);
            if(hasInvalidInputs(inputList)) {
                disableButton(submitButton, inactiveButtonClass);
            } else {
                enableButton(submitButton, inactiveButtonClass);
            };
        });
    });
};

function checkInputValidity (formElement, inputElement, {inputErrorClass, errorClass}) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

function showInputError (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};
  
function hideInputError (formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
};

function hasInvalidInputs (formInputs) {
    return formInputs.some(item => !item.checkValidity());
}
  
function disableButton (submitButton, inactiveButtonClass) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute("disabled", false);
}

function enableButton (submitButton, inactiveButtonClass) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute("disabled");
}

enableValidation(formVariables);