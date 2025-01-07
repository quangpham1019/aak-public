import initializeNavbar from "./initializeNavbar.js";
import initializeMenuItems from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";

$(document).ready(function() {

    initializeNavbar();
    initializeMenuItems();
    initializeReviewsCarousels();

    let test = LayoutUtility.execute(menu);
    console.log(test);
});

class MenuComponent {
    _name;
    _description;
    _Img;

    constructor(name, description, img) {
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
class MenuCategory extends MenuComponent {
    _menuItems;
    _menuCategories

    constructor(name, description, Img) {
        super(name, description, Img);
    }

    get items() {
        return this.menuItems;
    }
    set items(menuItems) {
        this._menuItems = menuItems;
    }

    get categories() {
        return this._menuCategories;
    }
    set categories(menuCategories) {
        this._menuCategories = menuCategories;
    }

    addMenuItems(menuItems) {
        this._menuItems.push(menuItems);
    }
    addSubCategories(menuCategories) {
        this._menuCategories.push(menuCategories);
    }
}
class MenuItem extends MenuComponent {
    _price;

    constructor(name, description, Img, price) {
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
class Img {
    _imgSrc;
    _imgAlt;
    _ariaLabel;

    constructor(imgSrc, imgAlt, ariaLabel) {
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
class LayoutUtility {

    static _resultFragment;

    static execute(menuCategory) {
        this._resultFragment = document.createDocumentFragment();
        this.#traverseMenuCategoryAndApplyDesign(menuCategory, this._resultFragment);
        return this._resultFragment;
    }

    static #traverseMenuCategoryAndApplyDesign(menuCategory, tree) {
        // choose and apply LAYOUT_DESIGN_1 to current menuCategory
        // result is FRAGMENT_SUB_1
        let categoryElement = document.createElement("div");
        categoryElement.id = `${menuCategory.name}`;


        // choose a LAYOUT_DESIGN_2 for menuItems
        // traverse and create menu items
        menuCategory?.menuItems?.forEach(menuItem => {
            // apply LAYOUT_DESIGN_2 to menuItem
            // result is FRAGMENT_SUB_2
            // append FRAGMENT_SUB_2 as child to FRAGMENT_SUB_1
            let itemElement = document.createElement("div");
            itemElement.id = `${menuItem.name}`;
            categoryElement.appendChild(itemElement);
        });

        menuCategory?.menuCategories?.forEach(menuCategory => {
            // create FRAGMENT_SUB_3
            // apply recursively #traverseMenuCategoryAndApplyDesign on menuCategory and FRAGMENT_SUB_3
            // add FRAGMENT_SUB_3 to FRAGMENT_SUB_1
            let newFrag = document.createDocumentFragment();
            this.#traverseMenuCategoryAndApplyDesign(menuCategory, newFrag);
            categoryElement.appendChild(newFrag);
        });

        // append FRAGMENT_SUB_1 as child to tree
        tree.appendChild(categoryElement);
    }
}

export { LayoutUtility, MenuComponent, MenuCategory, MenuItem, Img };

let menu = new MenuCategory("menu", "");
let phoCategory = new MenuCategory("pho", "flavorful bowl of tender filet mignon cut and rice noodle");
let appetizerCategory = new MenuCategory("appetizer", "appetizing starters");
let drinkCategory = new MenuCategory("drink", "");
let teaCategory = new MenuCategory("tea", "");
let smoothieCategory = new MenuCategory("smoothie", "");

let houseSpecialPho = new MenuItem("house special pho", "best pho in town", 15);
let chickenPho = new MenuItem("chicken pho", "best chicken pho in town", 15);
let springRoll = new MenuItem("spring roll", "shrimp, rice noodle, vegetables", 8);
let eggRoll = new MenuItem("egg roll", "egg roll", 7);

let water = new MenuItem("water", "", 0);
let soda = new MenuItem("soda", "", 3);
let thaiTea = new MenuItem("thai tea", "", 5);
let jasmineTea = new MenuItem("jasmine tea", "", 5);
let pineappleSmoothie = new MenuItem("pineapple smoothie", "", 5);
let mangoSmoothie = new MenuItem("mango smoothie", "", 5);


phoCategory.menuItems = [houseSpecialPho, chickenPho];
appetizerCategory.menuItems = [springRoll, eggRoll];

drinkCategory.menuCategories = [teaCategory, smoothieCategory];
drinkCategory.menuItems = [water, soda];
teaCategory.menuItems = [thaiTea, jasmineTea];
smoothieCategory.menuItems = [pineappleSmoothie, mangoSmoothie];

menu.menuCategories = [phoCategory, appetizerCategory, drinkCategory];

export {menu};