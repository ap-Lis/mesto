import "./index.css";

import {
  initialCards,
  formVariables,
  popupEditOpenButtonElement,
  popupAddOpenButtonElement,
  popupTypeAdd,
  popupTypeEdit,
  nameInput,
  nameTextContent,
  jobInput,
  jobTextContent,
  templateSelector,
  elementsGroup,
  popupTypePicture
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const userInfo = new UserInfo(jobTextContent, nameTextContent);

const editFormValidation = new FormValidator(formVariables, document.forms.edit);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(formVariables, document.forms.add);
addFormValidation.enableValidation();

const section = new Section({items: initialCards, renderer: renderer}, elementsGroup);
section.renderAllElements();

const popupEdit = new PopupWithForm(popupTypeEdit, (inputData) => {
  userInfo.setUserInfo({name: inputData[0], info: inputData[1]})
  popupEdit.close();
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm(popupTypeAdd, (inputData) => {
  const card = new Card({name: inputData[0], link: inputData[1], handleCardClick: () => {
    const popupImg = new PopupWithImage(popupTypePicture, inputData[1], inputData[0]);
    popupImg.open();
    popupImg.setEventListeners();
  }}, templateSelector);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
  popupAdd.close();
  document.forms.add.reset();
  addFormValidation.resetForm();
});
popupAdd.setEventListeners();

function renderer(item) {
  const card = new Card({name: item.name, link: item.link, handleCardClick: (evt) => {
    const popupImg = new PopupWithImage(popupTypePicture, item.link, item.name);
    popupImg.open(evt);
    popupImg.setEventListeners();
  }}, templateSelector);
  const cardElement = card.generateCard();
  elementsGroup.append(cardElement);
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
})