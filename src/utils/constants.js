//данные для валидатора
const formVariables = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

// popup-edit
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupEditFormElement = popupTypeEdit.querySelector('.popup__content');
const nameInput = popupEditFormElement.querySelector('.popup__input_value_name');
const jobInput = popupEditFormElement.querySelector('.popup__input_value_job');
const popupEditOpenButtonElement = document.querySelector('.profile__edit-button');

//popup-add
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');

//popup-avatar
const popupAvatarOpenButtonElement = document.querySelector('.profile__avatar');


//template
const templateSelector = document.querySelector('#element-template').content;

  export {
    formVariables,
    nameInput,
    jobInput,
    popupEditOpenButtonElement,
    popupAddOpenButtonElement,
    templateSelector,
    popupAvatarOpenButtonElement
  };