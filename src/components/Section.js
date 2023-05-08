export class Section {
    constructor({items, renderer}, containerSelector) {
      this._containerSelector = containerSelector;
      this._items = items;
      this._renderer = renderer;
    }
  
    renderAllElements() {
      this._items.forEach((item) => this._renderer(item))
    }
  
    addItem(itemHtml) {
      this._containerSelector.prepend(itemHtml)
    }
  }