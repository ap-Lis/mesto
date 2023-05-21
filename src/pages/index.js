import "./index.css";

import {
  formVariables,
  popupEditOpenButtonElement,
  popupAddOpenButtonElement,
  popupAvatarOpenButtonElement,
  nameInput,
  jobInput,
  templateSelector,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js"

const api = new Api({url: 'https://mesto.nomoreparties.co/v1/cohort-66/', token: '098239d2-f16f-4551-948e-985979822f3b'});

const userInfo = new UserInfo('.profile__job', '.profile__name', '.profile__avatar');

const editFormValidation = new FormValidator(formVariables, document.forms.edit);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(formVariables, document.forms.add);
addFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(formVariables, document.forms.avatar);
avatarFormValidation.enableValidation();

const section = new Section({items: [], renderer: renderer}, '.elements');

const popupEdit = new PopupWithForm('.popup_type_edit', (inputData) => {
  popupEdit.renderLoading(true);
  api.setUserInfo({name: inputData.name, info: inputData.job})
    .then(userInfo.setUserInfo({name: inputData.name, info: inputData.job}))
    .catch((err) => console.log(err))
    .finally(popupEdit.renderLoading(false));
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.popup_type_add', (inputData) => {
  popupAdd.renderLoading(true);
  api.addCard({name: inputData.place_title, link: inputData.place_url})
  .then((res) => {
    renderer({name: res.name, link: res.link, likes: res.likes, _id: res._id, owner: res.owner, userId: userInfo.getUserId()})
  })
  .catch((err) => console.log(err))
  .finally(popupAdd.renderLoading(false));;
});
popupAdd.setEventListeners();

const popupImg = new PopupWithImage('.popup_type_picture');
popupImg.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar', (inputData) => {
  popupAvatar.renderLoading(true);
  api.updateAvatar(inputData.avatar_url)
  .then((res) => {userInfo.setUserAvatar(res.avatar)})
  .catch((err) => console.log(err))
  .finally(popupAvatar.renderLoading(false));;;
});
popupAvatar.setEventListeners();

const popupSubmit = new PopupWithSubmit('.popup_type_submit', () => {
})
popupSubmit.setEventListeners();

function renderer(item) {
  const card = new Card({name: item.name, link: item.link, likes: item.likes, _id: item._id, owner: {_id: item.owner._id}, userId: userInfo.getUserId()
    , handleCardClick: (name, link) => {
      popupImg.open(name, link);
    }
    , handleCardDelete: (cardId) => {
      popupSubmit.open();
      popupSubmit.assignSubmit(() => {
        api.deleteCard(cardId)
        .then(card.deleteCard())
        .then(popupSubmit.close())
        .catch((err) => console.log(err));
      })
    }
    , handleCardLike: (cardId) => {
      if (card.isLiked()) {
        api.removeLike(cardId)
        .then((res) => {
          card.toggleLikeButton();
          card.refreshLikes(res.likes);
        })
        .catch((err) => console.log(err));
      } else {
        api.setLike(cardId)
        .then((res) => {
          card.toggleLikeButton();
          card.refreshLikes(res.likes);
        })
        .catch((err) => console.log(err));
      };
    }}
    , templateSelector);
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

popupAvatarOpenButtonElement.addEventListener('click', function () {
  popupAvatar.open();
})

popupAddOpenButtonElement.addEventListener('click', function () {
  popupAdd.open();
  addFormValidation.resetForm();
})

api.getUserInfo()
.then((res) => {
  userInfo.setUserInfo({name: res.name, info: res.about, id: res._id});
  userInfo.setUserAvatar(res.avatar);
})
.then((res) => api.getInitialCards(res))
.then((res) => {
  const cards = res;
  cards.reverse().forEach((item) => renderer(item));
})
.catch((err) => console.log(err));;