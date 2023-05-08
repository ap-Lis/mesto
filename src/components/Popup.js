export class Popup {
    constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
      this._escClose = this._handleEscClose.bind(this);
    }
  
    open () {
      this._popupSelector.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._escClose);
    }
  
    close () {
      this._popupSelector.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', this._escClose);
    }
  
    _handleEscClose (evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    _closeOnOverlay(evt) {
      if(evt.target === evt.currentTarget) {
        this.close();
      }
    }
  
    setEventListeners() {
      this._popupCloseButton.addEventListener('click', this.close.bind(this));
      this._popupSelector.addEventListener('click', this._closeOnOverlay.bind(this));
    }
  }