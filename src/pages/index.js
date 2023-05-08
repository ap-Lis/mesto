import "./index.css";

import {
  initialCards,
  formVariables,
  popupEditOpenButtonElement,
  popupAddOpenButtonElement,
  nameInput,
  jobInput,
  templateSelector,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const userInfo = new UserInfo('.profile__job', '.profile__name');

const editFormValidation = new FormValidator(formVariables, document.forms.edit);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(formVariables, document.forms.add);
addFormValidation.enableValidation();

const section = new Section({items: initialCards.reverse(), renderer: renderer}, '.elements');
section.renderAllElements();

const popupEdit = new PopupWithForm('.popup_type_edit', (inputData) => {
  userInfo.setUserInfo({name: inputData.name, info: inputData.job})
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.popup_type_add', (inputData) => {
  renderer({name: inputData.place_title, link: inputData.place_url});
});
popupAdd.setEventListeners();

function renderer(item) {
  const card = new Card({name: item.name, link: item.link, handleCardClick: (name, link) => {
    const popupImg = new PopupWithImage('.popup_type_picture');
    popupImg.open(name, link);
    popupImg.setEventListeners();
  }}, templateSelector);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
}

popupEditOpenButtonElement.addEventListener('click', function () {
  popupEdit.open();
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.info;
  editFormValidation.resetForm();
});

popupAddOpenButtonElement.addEventListener('click', function () {
  popupAdd.open();
  addFormValidation.resetForm();
})