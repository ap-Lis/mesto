import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor (popupSelector, imageLink, imageName) {
      super(popupSelector);    
      this._popupTypePictureImage = this._popupSelector.querySelector('.popup__image');
      this._popupTypePictureImageTitle = this._popupSelector.querySelector('.popup__image-title');
      this._imageLink = imageLink;
      this._imageName = imageName;
    }
  
    open () {
        this._popupTypePictureImage.src = this._imageLink;
        this._popupTypePictureImage.alt = this._imageName;
        this._popupTypePictureImageTitle.textContent = this._imageName;
        super.open();
    }
  }