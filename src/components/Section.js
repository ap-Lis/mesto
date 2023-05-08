export class Section {
    constructor({items, renderer}, containerSelector) {
      this._container = document.querySelector(containerSelector);;
      this._items = items;
      this._renderer = renderer;
    }
  
    renderAllElements() {
      this._items.forEach(this._renderer);
    }
  
    addItem(itemHtml) {
      this._container.prepend(itemHtml);
    }
  }