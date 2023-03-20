// popup-edit
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupEditFormElement = popupTypeEdit.querySelector('.popup__content');
const nameInput = popupEditFormElement.querySelector('.popup__input_value_name');
const jobInput = popupEditFormElement.querySelector('.popup__input_value_job');
const popupEditOpenButtonElement = document.querySelector('.profile__edit-button');

//popup-add
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupAddFormElement = popupTypeAdd.querySelector('.popup__content');
const placeTitleInput = popupAddFormElement.querySelector('.popup__input_value_place-title');
const placeUrlInput = popupAddFormElement.querySelector('.popup__input_value_place-url');
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');

//template
const elementTemplate = document.querySelector('#element-template').content;
const elementsContainer = document.querySelector('.elements');

initialCards.forEach(initialCard => {renderElement(initialCard.link, initialCard.name, 0)});

//popup-picture
const popupTypePicture = document.querySelector('.popup_type_picture');
const popupTypePictureOpenButtonElement = document.querySelector('.element__image');
const popupImage = popupTypePicture.querySelector('.popup__image');
const popupImageTitle = popupTypePicture.querySelector('.popup__image-title');

function addElement(elementLink, elementName) {
    const elementContent = elementTemplate.querySelector('.element').cloneNode(true);

    elementContent.querySelector('.element__label').textContent = elementName;

    const elementImage = elementContent.querySelector('.element__image');
    elementImage.src = elementLink;
    elementImage.alt = elementName;

    elementContent.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_enabled');
    });

    elementContent.querySelector('.element__delete-button').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    });

    elementImage.addEventListener('click', function () {
      openPopup(popupTypePicture);
      popupImage.src = elementLink;
      popupImage.alt = elementName;
      popupImageTitle.textContent = elementName;
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

const nameTextContent = document.querySelector('.profile__name');
const jobTextContent = document.querySelector('.profile__job');

function refreshPopupValues () {
    nameInput.value = nameTextContent.textContent;
    jobInput.value = jobTextContent.textContent;
}

function openPopup (popup) {
    popup.classList.add('popup_is-opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    nameTextContent.textContent = nameInput.value;
    jobTextContent.textContent = jobInput.value;
    closePopup(popupTypeEdit);
}

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderElement(placeUrlInput.value, placeTitleInput.value, 1)
  closePopup(popupTypeAdd);
  placeUrlInput.value = '';
  placeTitleInput.value = '';
}

popupEditFormElement.addEventListener('submit', handleEditFormSubmit);

popupAddFormElement.addEventListener('submit', handleAddFormSubmit);

popupEditOpenButtonElement.addEventListener('click', function () {
  openPopup(popupTypeEdit);
  refreshPopupValues();
});

popupAddOpenButtonElement.addEventListener('click', function () {
  openPopup(popupTypeAdd);
})

document.querySelectorAll('.popup__close-button').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
  //спасибо
});  