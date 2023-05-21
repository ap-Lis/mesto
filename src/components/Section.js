export class Section {
    constructor({renderer}, containerSelector) {
      this._container = document.querySelector(containerSelector);;
      this._renderer = renderer;
    }
  
    renderAllElements(items) {
      items.forEach(this._renderer);
    }
  
    addItem(itemHtml) {
      this._container.prepend(itemHtml);
    }
  }