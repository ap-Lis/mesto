import {
  initialCards,
  formVariables,
  popupEditFormElement,
  popupAddFormElement,
  popupEditOpenButtonElement,
  popupAddOpenButtonElement,
  popupTypeAdd,
  popupTypeEdit,
  nameInput,
  nameTextContent,
  jobInput,
  jobTextContent,
  placeTitleInput,
  placeUrlInput
} from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editFormValidation = new FormValidator(formVariables, document.forms.edit);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formVariables, document.forms.add);
addFormValidation.enableValidation();

initialCards.forEach((initialCard) => {
  renderCard(initialCard.name, initialCard.link, 0, openPopup);
});

function renderCard(name, link, direction = 0, openPopup) {
  const card = new Card(name, link, '#element-template', openPopup);
  direction === 0 ? document.querySelector('.elements').append(card.generateCard()) : document.querySelector('.elements').prepend(card.generateCard());
}

function refreshPopupValues () {
  nameInput.value = nameTextContent.textContent;
  jobInput.value = jobTextContent.textContent;
}

function closePopupOnEsc(evt) {
  const openedPopup = document.querySelector('.popup_is-opened')
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  nameTextContent.textContent = nameInput.value;
  jobTextContent.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderCard(placeTitleInput.value, placeUrlInput.value, '#element-template', openPopup);
  closePopup(popupTypeAdd);
  addFormValidation.resetAddForm();
}

function closePopupOnOverlay(evt, element) {
  if(evt.target === evt.currentTarget) {
    closePopup(element);
  }
}

popupEditFormElement.addEventListener('submit', handleEditFormSubmit);
popupAddFormElement.addEventListener('submit', handleAddFormSubmit);

popupEditOpenButtonElement.addEventListener('click', function () {
  editFormValidation.resetEditForm();
  openPopup(popupTypeEdit);
  refreshPopupValues();
});

popupAddOpenButtonElement.addEventListener('click', function () {
  openPopup(popupTypeAdd);
})

document.querySelectorAll('.popup__close-button').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

document.querySelectorAll('.popup').forEach(element => {
  element.addEventListener('click', (evt) => closePopupOnOverlay(evt, element));
});