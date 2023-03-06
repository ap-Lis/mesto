const formElement = document.querySelector('.popup__content');
const popupWindowElement = document.querySelector('.popup__window');
const popupCloseButtonElement = popupWindowElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_job');

let nameTextContent = document.querySelector('.profile__name');
let jobTextContent = document.querySelector('.profile__job');

function refreshPopupValues () {
    nameInput.value = nameTextContent.textContent;
    jobInput.value = jobTextContent.textContent;
}

function popupTogle () {
    refreshPopupValues();
    document.querySelector('.popup').classList.toggle('popup_is-opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameTextContent.textContent = nameInput.value;
    jobTextContent.textContent = jobInput.value;
    popupTogle ();
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', popupTogle);
popupCloseButtonElement.addEventListener('click', popupTogle);