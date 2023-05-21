export class Card {
    constructor({name, link, likes, _id, owner, userId, handleCardClick, handleCardDelete, handleCardLike}, templateSelector) {
      this._name = name;
      this._link = link;
      this._likes = likes;
      this._handleCardClick = handleCardClick;
      this._handleCardDelete = handleCardDelete;
      this._handleCardLike = handleCardLike;
      this._templateSelector = templateSelector;
      this._id = _id;
      this._ownerId = owner._id;
      this._userId = userId;
    }
    
    _getTemplate() {
      const elementContent = this._templateSelector.querySelector('.element').cloneNode(true);
      return elementContent; 
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._elementLikeButton = this._element.querySelector('.element__like-button');
      if(this.isLiked()) {
        this.toggleLikeButton();
      }
      this._elementLikeContainer = this._element.querySelector('.element__like-container')
      this._elementLikeCounter = this._element.querySelector('.element__like-counter')
      if(this._ownerId === this._userId) {
        console.log(this._ownerId, this._userId);
        this._elementDeleteButton = this._element.querySelector('.element__delete-button');
        this._enableDeleteButton()
      }
      this._elementImage = this._element.querySelector('.element__image');
      this._setEventListeners();
      this._element.querySelector('.element__label').textContent = this._name;
      this.refreshLikes(this._likes)
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      return this._element; 
    }

    refreshLikes(likes) {
      this._elementLikeCounter.textContent = likes.length;
      this._likes = likes;
    }
  
    toggleLikeButton () {
      this._elementLikeButton.classList.toggle('element__like-button_enabled');
    }

    isLiked() {
      if(this._likes.find((user) => user._id === this._userId)) {return true} else {return false};
    }

    _enableDeleteButton() {
        this._elementDeleteButton.classList.add('element__delete-button_enabled');
    }
  
    deleteCard() {
      this._element.remove();
      this._element = null;
      this._elementImage = null;
      this._elementLikeButton = null;
      this._elementDeleteButton = null;
    }
  
    _setEventListeners() {
      this._elementLikeButton.addEventListener('click', () => {this._handleCardLike(this._id)});
      if(this._ownerId === this._userId) {
        this._elementDeleteButton.addEventListener('click', () => {this._handleCardDelete(this._id)});
      }
      this._elementImage.addEventListener('click', () => {this._handleCardClick(this._name, this._link);});
    }
  }