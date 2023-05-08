export class Card {
    constructor({name, link, handleCardClick}, templateSelector) {
      this._name = name;
      this._link = link;
      this._handleCardClick = handleCardClick;
      this._templateSelector = templateSelector;
    }
    
    _getTemplate() {
      const elementContent = this._templateSelector.querySelector('.element').cloneNode(true);
      return elementContent; 
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._elementLikeButton = this._element.querySelector('.element__like-button');
      this._elementDeleteButton = this._element.querySelector('.element__delete-button');
      this._elementImage = this._element.querySelector('.element__image');
      this._setEventListeners();
      this._element.querySelector('.element__label').textContent = this._name;
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      return this._element; 
    }
  
    _toggleLikeButton() {
      this._elementLikeButton.classList.toggle('element__like-button_enabled');
    }
  
    _deleteCard() {
      this._element.remove();
      this._element = null;
      this._elementImage = null;
      this._elementLikeButton = null;
      this._elementDeleteButton = null;
    }
  
    _setEventListeners() {
      this._elementLikeButton.addEventListener('click', () => {this._toggleLikeButton()});
      this._elementDeleteButton.addEventListener('click', () => {this._deleteCard()});
      this._elementImage.addEventListener('click', (evt) => {this._handleCardClick(this._name, this._link);});
    }
  }