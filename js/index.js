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
class Img {
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

class LayoutUtility {

    static _resultFragment;

    static execute(menuCategory) {
        this._resultFragment = document.createDocumentFragment();
        this.#traverseMenuCategoryAndApplyDesign(menuCategory, this._resultFragment);
        return this._resultFragment;
    }

    static #traverseMenuCategoryAndApplyDesign(menuCategory, tree) {


        // choose LAYOUT_DESIGN_1 for current menuCategory
        const [layoutDesigns, classNames] = LayoutDesignFactory.getLayoutDesignForCategory(menuCategory);
        const [categoryLayoutDesign, itemLayoutDesign] = layoutDesigns;
        const [itemsWrapperClass, itemsClass] = classNames;
        let categoryElement, itemsWrapper;

        // Ignore the top layer div with id="menu"
        if (menuCategory.name === "menu")  {

            categoryElement = document.createDocumentFragment();
            itemsWrapper = categoryElement;
        } else {

            categoryElement = document.createElement("div");
            categoryElement.id = `${menuCategory.name}`;

            // apply LAYOUT_DESIGN_1 to current menuCategory
            categoryLayoutDesign.applyDesign(categoryElement);
            itemsWrapper = categoryElement.querySelector(`.${itemsWrapperClass}`);

        }

        // choose a LAYOUT_DESIGN_2 for menuItems
        // traverse and create menu items
        menuCategory?.menuItems?.forEach(menuItem => {
            // apply LAYOUT_DESIGN_2 to menuItem
            // result is FRAGMENT_SUB_2
            // append FRAGMENT_SUB_2 as child to FRAGMENT_SUB_1
            let itemElement = document.createElement("div");
            itemElement.classList.add(itemsClass);
            itemLayoutDesign.menuComponent = menuItem;
            itemLayoutDesign.applyDesign(itemElement);

            itemsWrapper.appendChild(itemElement);
        });

        menuCategory?.menuCategories?.forEach(menuCategory => {
            // create FRAGMENT_SUB_3
            // apply recursively #traverseMenuCategoryAndApplyDesign on menuCategory and FRAGMENT_SUB_3
            // add FRAGMENT_SUB_3 to FRAGMENT_SUB_1
            let newFrag = document.createDocumentFragment();
            this.#traverseMenuCategoryAndApplyDesign(menuCategory, newFrag);

            itemsWrapper.appendChild(newFrag);
        });

        // append FRAGMENT_SUB_1 as child to tree
        tree.appendChild(categoryElement);
    }
}
class LayoutDesignFactory {

    static getLayoutDesignForCategory(menuCategory) {
        let categoryLayoutDesign, itemLayoutDesign;
        let itemsWrapperClass, itemsClass;

        switch (menuCategory) {
            default:
                categoryLayoutDesign = new SpecialCategoryLayoutDesign(menuCategory);
                itemLayoutDesign = new SpecialItemLayoutDesign();
                itemsWrapperClass = "menu-category-items";
                itemsClass = "menu-item";
                break;
        }

        return [[categoryLayoutDesign, itemLayoutDesign], [itemsWrapperClass, itemsClass]];
    }
}
class LayoutDesign {

    _menuComponent;
    _designResult;

    constructor(menuComponent) {
        if (this.constructor === LayoutDesign) {
            throw new Error("Abstract class can't be instantiated.");
        }
        this._menuComponent = menuComponent;
    }

    get menuComponent() {
        return this._menuComponent;
    }
    set menuComponent(menuComponent) {
        this._menuComponent = menuComponent;
    }

    get result() {
        return this._designResult;
    }
    set result(result) {
        this._designResult = result;
    }

    applyDesign() {
        throw new Error("Method must be implemented by child class.")
    }

    getDesignResult() {
        return this._designResult;
    }
}
class SpecialCategoryLayoutDesign extends LayoutDesign {

    constructor(menuComponent) {
        super(menuComponent);
    }

    applyDesign(designingElement) {
        // <!--*********************
        //     .menu-category-wrapper LAYOUT
        // **********************-->
        // <!--<div class="menu-category-wrapper">-->
        // <!--    <div class="menu-category-heading">-->
        // <!--        <div class="category-heading-clicker">-->
        // <!--            <h2 class="category-indicator"></h2>-->
        // <!--            <h2 class="menu-category-title"></h2>-->
        // <!--        </div>-->
        // <!--    </div>-->
        // <!--    <div class="menu-category-items">-->
        // <!--        <div class="menu-item"></div>-->
        // <!--        <div class="menu-item"></div>-->
        // <!--        <div class="menu-item"></div>-->
        // <!--    </div>-->
        // <!--</div>-->

        designingElement.classList.add("menu-category-wrapper");
        let categoryHeading = document.createElement("div");

        let categoryTitle = document.createElement("div");
        categoryTitle.innerText = this._menuComponent.name;
        categoryTitle.classList.add("menu-category-title");

        let categorySelectedIndicator = document.createElement("div");
        categorySelectedIndicator.innerHTML = menuCategoryClosedIndicator;
        categorySelectedIndicator.classList.add("category-indicator");

        let categoryHeadingClicker = document.createElement("div");
        categoryHeadingClicker.classList.add("category-heading-clicker");
        categoryHeadingClicker.replaceChildren(categorySelectedIndicator, categoryTitle);

        categoryHeading.replaceChildren(categoryHeadingClicker);
        categoryHeading.classList.add("menu-category-heading");
        designingElement.appendChild(categoryHeading);

        let menuItemsWrapper = document.createElement("div");
        menuItemsWrapper.classList.add("menu-category-items");

        designingElement.appendChild(menuItemsWrapper);
    }
}
class SpecialItemLayoutDesign extends LayoutDesign {

    constructor(menuComponent) {
        super(menuComponent);
    }

    applyDesign(designingElement) {
        // <!--*********************
        //     .menu-item LAYOUT
        // **********************-->
        // <!--<div class="menu-item">-->
        // <!--    <div class="menu-item-img">-->
        // <!--        <img src="assets/img/item-1.jpg" alt="a pho bowl"/>-->
        // <!--    </div>-->
        // <!--    <div class="menu-item-description">-->
        // <!--        <div class="menu-item-name">Signature Pho</div>-->
        // <!--        <div class="menu-item-details">Flavorful cut of filet mignon served with cilantro, jalapeno, and meatball</div>-->
        // <!--    </div>-->
        // <!--    <div class="menu-item-price">18</div>-->
        // <!--</div>-->

        let curItem = this._menuComponent;

        let itemImg = document.createElement("div");
        itemImg.classList.add("menu-item-img");
        let img = document.createElement("img");
        img.setAttribute("src", curItem.img.src);
        img.setAttribute("alt", curItem.img.alt);
        itemImg.appendChild(img);

        let itemDescription = document.createElement("div");
        itemDescription.classList.add("menu-item-description");
        let itemName = document.createElement("div");
        itemName.innerText = curItem.name;
        itemName.classList.add("menu-item-name");
        let itemDetails = document.createElement("div");
        itemDetails.innerText = curItem.description;
        itemDetails.classList.add("menu-item-details");
        itemDescription.replaceChildren(itemName, itemDetails);

        let itemPrice = document.createElement("div");
        itemPrice.classList.add("menu-item-price");
        itemPrice.innerText = curItem.price;

        if (curItem.img.src.trim().length !== 0) {
            designingElement.replaceChildren(itemImg, itemDescription, itemPrice);

        } else {
            designingElement.replaceChildren(itemDescription, itemPrice);
        }
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


phoCategory.menuItems = [
    houseSpecialPho,
    chickenPho
];
appetizerCategory.menuItems = [
    springRoll,
    eggRoll
];

drinkCategory.menuCategories = [
    teaCategory,
    smoothieCategory];
drinkCategory.menuItems = [
    water,
    soda
];
teaCategory.menuItems = [
    thaiTea,
    jasmineTea
];
smoothieCategory.menuItems = [
    pineappleSmoothie,
    mangoSmoothie
];

menu.menuCategories = [phoCategory, appetizerCategory, drinkCategory];
const menuCategoryClosedIndicator = "<i id=\"indicator-collapse\" class=\"fa-solid fa-greater-than\"></i>";
const menuCategoryOpenIndicator = "<i id=\"indicator-open\" class=\"fa-solid fa-v\"></i>\n";

export {menu};