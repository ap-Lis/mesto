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
  placeUrlInput,
  templateSelector,
  elementsGroup
} from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editFormValidation = new FormValidator(formVariables, document.forms.edit);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formVariables, document.forms.add);
addFormValidation.enableValidation();

initialCards.forEach((initialCard) => {
  const cardElement = createCard(initialCard.name, initialCard.link);
  renderLast(cardElement);
});

function createCard(name, link) {
  const card = new Card(name, link, templateSelector, openPopup);
  return card.generateCard();
}

function renderFirst(cardElement) {
  elementsGroup.prepend(cardElement);
}

function renderLast(cardElement) {
  elementsGroup.append(cardElement);
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
  const cardElement = createCard(placeTitleInput.value, placeUrlInput.value);
  renderFirst(cardElement);
  closePopup(popupTypeAdd);
  document.forms.add.reset();
  addFormValidation.resetForm();
}

function closePopupOnOverlay(evt, element) {
  if(evt.target === evt.currentTarget) {
    closePopup(element);
  }
}

popupEditFormElement.addEventListener('submit', handleEditFormSubmit);
popupAddFormElement.addEventListener('submit', handleAddFormSubmit);

popupEditOpenButtonElement.addEventListener('click', function () {
  
  openPopup(popupTypeEdit);
  refreshPopupValues();
  editFormValidation.resetForm();
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