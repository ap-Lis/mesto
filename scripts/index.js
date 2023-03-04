const formElement = document.querySelector('.popup__content');
const popupWindowElement = document.querySelector('.popup__window');
const popupCloseButtonElement = popupWindowElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__job-input');

function refreshPopupValues () {
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__job').textContent;
}

function popupTogle () {
    refreshPopupValues();
    document.querySelector('.popup').classList.toggle('popup_is-opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__job').textContent = jobInput.value;
    popupTogle ();
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', popupTogle);
popupCloseButtonElement.addEventListener('click', popupTogle);