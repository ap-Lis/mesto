import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor (popup) {
      super(popup);    
      this._popupTypePictureImage = this._popup.querySelector('.popup__image');
      this._popupTypePictureImageTitle = this._popup.querySelector('.popup__image-title');
    }
  
    open (name, link) {
        this._popupTypePictureImage.src = link;
        this._popupTypePictureImage.alt = name;
        this._popupTypePictureImageTitle.textContent = name;
        super.open();
    }
  }