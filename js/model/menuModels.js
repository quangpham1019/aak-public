export class MenuComponent {
    _name;
    _description;
    _Img;

    constructor(name, description, img = new Img()) {
        if (this.constructor === MenuComponent) {
            throw new Error("Abstract class can't be instantiated.");
        }

        this._name = name;
        this._description = description;
        this._Img = img;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }

    get img() {
        return this._Img;
    }
    set img(img) {
        this._Img = img;
    }

    imageIsNull() {
        return this._Img == null;
    }
}
export class MenuCategory extends MenuComponent {
    _menuItems;
    _menuCategories;

    constructor(name, description, Img) {
        super(name, description, Img);
    }

    get menuItems() {
        return this._menuItems;
    }
    set menuItems(menuItems) {
        this._menuItems = menuItems;
    }

    get menuCategories() {
        return this._menuCategories;
    }
    set menuCategories(menuCategories) {
        this._menuCategories = menuCategories;
    }

    addMenuItems(menuItems) {
        this._menuItems.push(menuItems);
    }
    addSubCategories(menuCategories) {
        this._menuCategories.push(menuCategories);
    }
}
export class MenuItem extends MenuComponent {
    _price;

    constructor(name, description, price, Img) {
        super(name, description, Img);
        this._price = price;
    }

    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
}
export class Img {
    _imgSrc;
    _imgAlt;
    _ariaLabel;

    constructor(imgSrc = "", imgAlt = "", ariaLabel = "") {
        this._imgSrc = imgSrc;
        this._imgAlt = imgAlt;
        this._ariaLabel = ariaLabel;
    }

    get src() {
        return this._imgSrc;
    }
    set src(src) {
        this._imgSrc = src;
    }

    get alt() {
        return this._imgAlt;
    }
    set alt(alt) {
        this._imgAlt = alt;
    }

    get aria() {
        return this._ariaLabel;
    }
    set aria(aria) {
        this._ariaLabel = aria;
    }
}