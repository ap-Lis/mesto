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

//template
const templateSelector = document.querySelector('#element-template').content;

//карточки для заполнения
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  export {
    formVariables,
    nameInput,
    jobInput,
    popupEditOpenButtonElement,
    popupAddOpenButtonElement,
    initialCards,
    templateSelector,
  };