import { getDataAsObjects } from "./data/menuCategoryData.js";
import { MenuComponent, MenuItem, MenuCategory, Img } from "./model/menuModels.js";

const menuData = getDataAsObjects();
const menuCategoryClosedIndicator = "<i id=\"indicator-collapse\" class=\"fa-solid fa-greater-than\"></i>";
const menuCategoryOpenIndicator = "<i id=\"indicator-open\" class=\"fa-solid fa-v\"></i>\n";

export function initializeMenuItems() {
    let menu = document.querySelector("#menu");
    let menuFragment = LayoutUtility.execute(menuData);

    addEventListenersToCategoryHeadingClickers(menuFragment);

    menu.appendChild(menuFragment);
}
function addEventListenersToCategoryHeadingClickers(menuFragment) {
    let menuCategoryWrappers = menuFragment.querySelectorAll(".menu-category-wrapper");
    menuCategoryWrappers.forEach(menuCategoryWrapper => {
        let categoryHeadingClicker = menuCategoryWrapper.querySelector(".category-heading-clicker");
        let categorySelectedIndicator = menuCategoryWrapper.querySelector(".category-indicator");
        let categoryItems = menuCategoryWrapper.querySelector(".menu-category-items");
        let categoryHeading = menuCategoryWrapper.querySelector(".menu-category-heading");

        categoryHeadingClicker.addEventListener('click', function() {

            categoryItems.classList.toggle("menu-category-expand");
            categoryHeading.classList.toggle("menu-category-indicator-expand");

            let categorySelected = categoryItems.classList.contains("menu-category-expand");
            categorySelectedIndicator.innerHTML = categorySelected ? menuCategoryOpenIndicator : menuCategoryClosedIndicator;
        });
    });
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

        } else if (curItem.price !== 0) {
            designingElement.replaceChildren(itemDescription, itemPrice);
        } else {
            designingElement.replaceChildren(itemDescription);
        }
    }
}