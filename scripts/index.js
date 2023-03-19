// popup-edit
const popupTypeEdit = document.querySelector('.popup_type_edit');
const editFormElement = popupTypeEdit.querySelector('.popup__content');
let nameInput = editFormElement.querySelector('.popup__input_value_name');
let jobInput = editFormElement.querySelector('.popup__input_value_job');
const popupEditCloseButtonElement = popupTypeEdit.querySelector('.popup__close-button');
const popupEditOpenButtonElement = document.querySelector('.profile__edit-button');

//popup-add
const popupTypeAdd = document.querySelector('.popup_type_add');
const addFormElement = popupTypeAdd.querySelector('.popup__content');
let placeTitleInput = addFormElement.querySelector('.popup__input_value_place-title');
let placeUrlInput = addFormElement.querySelector('.popup__input_value_place-url');
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');
const popupAddCloseButtonElement = popupTypeAdd.querySelector('.popup__close-button');

const elementsContainer = document.querySelector('.elements');

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

initialCards.forEach(initialCard => {renderElement(initialCard.link, initialCard.name, 0)});

//popup-picture
const popupTypePicture = document.querySelector('.popup_type_picture');
const popupTypePictureOpenButtonElement = document.querySelector('.element__image');
const popupTypePictureCloseButtonElement = popupTypePicture.querySelector('.popup__close-button');

function addElement(elementLink, elementName) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementContent = elementTemplate.querySelector('.element').cloneNode(true);

    elementContent.querySelector('.element__label').textContent = elementName;
    elementContent.querySelector('.element__image').src = elementLink;
    elementContent.querySelector('.element__image').alt = elementName;

    elementContent.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_enabled');
    });

    elementContent.querySelector('.element__delete-button').addEventListener('click', function (evt) {
      evt.target.parentElement.remove();
    });

    elementContent.querySelector('.element__image').addEventListener('click', function (evt) {
      popupTogle(popupTypePicture);
      popupTypePicture.querySelector('.popup__image').src = evt.target.src;
      popupTypePicture.querySelector('.popup__image').alt = evt.target.parentElement.querySelector('.element__label').textContent;
      popupTypePicture.querySelector('.popup__image-title').textContent = evt.target.parentElement.querySelector('.element__label').textContent;
    });

    return elementContent;
}

function renderElement(elementLink, elementName, direction = 0) {
  if(direction === 0) {
    elementsContainer.append(addElement(elementLink, elementName));
  } else
  {
    elementsContainer.prepend(addElement(elementLink, elementName));
  }
}

let nameTextContent = document.querySelector('.profile__name');
let jobTextContent = document.querySelector('.profile__job');

function refreshPopupValues () {
    nameInput.value = nameTextContent.textContent;
    jobInput.value = jobTextContent.textContent;
}

function popupTogle (popup) {
    popup.classList.toggle('popup_is-opened');
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    nameTextContent.textContent = nameInput.value;
    jobTextContent.textContent = jobInput.value;
    popupTogle (popupTypeEdit);
}

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderElement(placeUrlInput.value, placeTitleInput.value, 1)
  popupTogle (popupTypeAdd);
  placeUrlInput.value = '';
  placeTitleInput.value = '';
}

editFormElement.addEventListener('submit', handleEditFormSubmit);

addFormElement.addEventListener('submit', handleAddFormSubmit);

popupEditOpenButtonElement.addEventListener('click', function () {
  popupTogle(popupTypeEdit);
  refreshPopupValues();
});
popupEditCloseButtonElement.addEventListener('click', function () {
  popupTogle(popupTypeEdit);
});

popupAddOpenButtonElement.addEventListener('click', function () {
  popupTogle(popupTypeAdd);
})
popupAddCloseButtonElement.addEventListener('click', function () {
  popupTogle(popupTypeAdd);
})

popupTypePictureCloseButtonElement.addEventListener('click', function () {
  popupTogle(popupTypePicture);
})