export class Card {
    constructor(name, link, templateSelector, openPopup) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._openPopup = openPopup;
      this._popupTypePicture = document.querySelector('.popup_type_picture');
      this._popupTypePictureImage = this._popupTypePicture.querySelector('.popup__image');
      this._popupTypePictureImageTitle = this._popupTypePicture.querySelector('.popup__image-title');
    }
    
    _getTemplate() {
      const elementContent = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
      return elementContent; 
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._elementLikeButton = this._element.querySelector('.element__like-button');
      this._elementDeleteButton = this._element.querySelector('.element__delete-button');
      this._elementImage = this._element.querySelector('.element__image');
      this._setEventListeners();
      this._element.querySelector('.element__label').textContent = this._name;
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = this._name;
      return this._element; 
    }
  
    _toggleLikeButton() {
      this._elementLikeButton.classList.toggle('element__like-button_enabled');
    }
  
    _deleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    _openImagePopup() {
      this._openPopup(this._popupTypePicture);
      this._popupTypePictureImage.src = this._link;
      this._popupTypePictureImage.alt = this._name;
      this._popupTypePictureImageTitle.textContent = this._name;
    }
  
    _setEventListeners() {
      this._elementLikeButton.addEventListener('click', () => {this._toggleLikeButton()});
      this._elementDeleteButton.addEventListener('click', () => {this._deleteCard()});
      this._elementImage.addEventListener('click', () => { this._openImagePopup()});
    }
  }