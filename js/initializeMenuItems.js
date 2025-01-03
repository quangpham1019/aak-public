import { getData } from "./menuCategoryData.js";

const menuCategories = getData();
const menuCategoryClosedIndicator = "<i id=\"indicator-collapse\" class=\"fa-solid fa-greater-than\"></i>";
const menuCategoryOpenIndicator = "<i id=\"indicator-open\" class=\"fa-solid fa-v\"></i>\n";

function populateCategoryLayoutWithMenuItems(menuCategory) {

    // let menuContent = document.querySelector("#menu-content");

    // TODO: it seems I only need one instance of MenuDesignFactory,
    //      this could be a good place to apply Singleton pattern
    let menuDesignFactory = new MenuDesignFactory(menuCategory);
    let curMenuDesign = menuDesignFactory.getMenuDesign();
    curMenuDesign.createMenuCategoryLayout();

    // menuContent.className = curMenuDesign.getMenuDesignClasses();
    // menuContent.replaceChildren(curMenuDesign.getTree());

    return curMenuDesign.getTree();
}
class MenuDesignFactory {

    _menuDesign;

    constructor(menuCategory) {
        this.initializeMenuDesign(menuCategory);
    }

    initializeMenuDesign(menuCategory) {

        // This is where the object creation happens\
        // MENU-DESIGN = MENU-LAYOUT-CSS-STYLE + ITEM-LAYOUT + ITEM-CSS-STYLE
        // ITEM-LAYOUT & ITEM-CSS-STYLE are decoupled here
        // ITEM-LAYOUT & MENU-LAYOUT-CSS-STYLE are coupled
        // ITEM-LAYOUT & MENU-LAYOUT-CSS-STYLE must match in format
        // To decouple these two, assuming ITEM-LAYOUT & ITEM-CSS-STYLE have limited variants
        // extend the class of ITEM-LAYOUT & ITEM-CSS-STYLE then alter the MENU-LAYOUT-CSS-STYLE
        switch (menuCategory) {
            case "special":
            case "rice":
            case "drink":
            case "catering":
            case "ice-cream":
            default:
                this._menuDesign = new SpecialMenuDesign(menuCategory);
                // console.log("using SpecialMenuDesign");
                break;
        }
    }

    getMenuDesign() {
        return this._menuDesign;
    }
}
class MenuDesign {

    _menuCategory;
    _menuItems;
    _menuDesignClasses;
    _tree;

    constructor() {
        if (this.constructor === MenuDesign) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    // createMenuCategoryLayout(): default creation of menu items, can be overridden
    // each child must implement createItemLayout()
    createMenuCategoryLayout() {

        // <!--*********************
        //     .menu-category-wrapper LAYOUT
        // **********************-->
        // <!--<div class="menu-category-wrapper">-->
        // <!--    <h2 class="menu-category-title"></h2>-->
        // <!--    <div class="menu-category-items">-->
        // <!--        <div class="menu-item"></div>-->
        // <!--        <div class="menu-item"></div>-->
        // <!--        <div class="menu-item"></div>-->
        // <!--    </div>-->
        // <!--</div>-->

        this._tree = document.createDocumentFragment();

        let categoryHeading = document.createElement("div");

        let categoryTitle = document.createElement("h2");
        categoryTitle.innerText = this._menuCategory;
        categoryTitle.classList.add("menu-category-title");

        let categorySelectedIndicator = document.createElement("h2");
        categorySelectedIndicator.innerHTML = menuCategoryClosedIndicator;
        categorySelectedIndicator.classList.add("category-indicator");

        categoryHeading.replaceChildren(categorySelectedIndicator, categoryTitle);
        categoryHeading.classList.add("menu-category-heading");
        this._tree.appendChild(categoryHeading);

        let menuItemsWrapper = document.createElement("div");
        Object.keys(this._menuItems).forEach(item => {
            menuItemsWrapper.appendChild(this.createItemLayout(item));
        })

        menuItemsWrapper.classList.add("menu-category-items");
        this._tree.appendChild(menuItemsWrapper);
    }
    createItemLayout() {
        throw new Error("Method createItemLayout() must be implemented.");
    }

    getTree() {
        return this._tree;
    }
    getMenuDesignClasses() {
        return this._menuDesignClasses;
    }
}
class SpecialMenuDesign extends MenuDesign {
    constructor(menuCategory) {
        super();
        this._menuCategory = menuCategory;
        this._menuItems = menuCategories[this._menuCategory].items;
        this._menuDesignClasses = `special-design-wrapper`;
    }

    createItemLayout(item) {
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

        let curItem = this._menuItems[item];
        let newEl = document.createElement("div");

        let itemImg = document.createElement("div");
        itemImg.classList.add("menu-item-img");
        let img = document.createElement("img");
        img.setAttribute("src", curItem.imgSrc);
        img.setAttribute("alt", curItem.imgAlt);
        itemImg.appendChild(img);

        let itemDescription = document.createElement("div");
        itemDescription.classList.add("menu-item-description");
        let itemName = document.createElement("div");
        itemName.innerText = item;
        itemName.classList.add("menu-item-name");
        let itemDetails = document.createElement("div");
        itemDetails.innerText = curItem.details;
        itemDetails.classList.add("menu-item-details");
        itemDescription.replaceChildren(itemName, itemDetails);

        let itemPrice = document.createElement("div");
        itemPrice.classList.add("menu-item-price");
        itemPrice.innerText = curItem.price;

        newEl.replaceChildren(itemImg, itemDescription, itemPrice);
        newEl.classList.add("menu-item");

        return newEl;
    }
}
class FlavorAndPriceMenuDesign extends MenuDesign {
    constructor(menuCategory) {
        super();
        this._menuCategory = menuCategory;
        this._menuItems = menuCategoryData[menuCategory].items;

        // change css design-wrapper for #menuContent here
        // MENU-LAYOUT-CSS-STYLE
        // TODO: which design pattern can I apply if
        //      I expect multiple menu-css-style for this menu item design
        //      and the number of menu item design will also grow huge
        //      (ie. menu-css-styles * item-designs * item-css-styles)
        this._menuDesignClasses = `flavor-and-price-design-wrapper`;
    }

    // override default implementation of base class
    createMenuCategoryLayout() {
        this._tree = document.createDocumentFragment();

        // create first section with id "price"
        let curTree = document.createElement("div");
        curTree.id = "price";

        let scoopPrice = {
            "SINGLE SCOOP": 4.95,
            "MID-SIZE": 6.95,
            "V.I.P.": 8.95,
            "TERMINATOR": 10.95
        }
        Object.keys(scoopPrice).forEach((scoopSize, index) => {
            let newEl = document.createElement("div");

            let scoopSizeEl = document.createElement("h4");
            scoopSizeEl.innerText = scoopSize;
            let scoopPriceEl = scoopPrice[scoopSize];

            newEl.replaceChildren(scoopSizeEl, scoopPriceEl);
            newEl.id = `${curTree.id}-${index+1}`;
            curTree.appendChild(newEl);
        })
        this._tree.appendChild(curTree);

        // create second section with id "flavor"
        curTree = document.createElement("div");
        curTree.id = "flavor";

        Object.keys(this._menuItems).forEach(item => {
            this.createItemLayout(item, curTree);
        })
        this._tree.appendChild(curTree);
    }

    createItemLayout(item, curTree)   {

        // change layout for each menu design here
        // ITEM-LAYOUT
        // must match format of MENU-LAYOUT-CSS-STYLE or else the display might break
        let newEl = document.createElement("div");

        let itemName = document.createElement("h3");
        itemName.innerText = item;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = this._menuItems[item];
        let description = document.createElement("p");
        description.innerText = "Flavor and price design is exclusively tailored for ice cream";

        newEl.replaceChildren(itemName, itemPrice, description);

        // change css item class for each menu item here
        // ITEM-CSS-STYLE
        newEl.className = `${this._menuCategory}-item`;

        curTree.appendChild(newEl);
    }
}
class RowMenuDesign extends MenuDesign {
    constructor(menuCategory) {
        super();
        this._menuCategory = menuCategory;
        this._menuItems = menuCategoryData[this._menuCategory].items;
        this._menuDesignClasses = `row-design-wrapper`;
    }

    createItemLayout(item)   {
        let newEl = document.createElement("div");

        let itemName = document.createElement("h1");
        itemName.innerText = item;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = this._menuItems[item];
        let description = document.createElement("p");
        description.innerText = `Row menu design provide common menu item layout for several categories`;

        newEl.replaceChildren(itemName, itemPrice, description);
        newEl.className = `${this._menuCategory}-item`;

        this._tree.appendChild(newEl);
    }
}

export function initializeMenuItems() {
    // traverse menuCategories, for each category
        // create category layout
        // traverse items, for each item
            // create item layout, populate data
            // add item to category element
        // append category to menu

    let menu = document.querySelector("#menu");

    for (const category in menuCategories) {
        if (menuCategories[category].items == null) continue;


        let categoryElement = populateCategoryLayoutWithMenuItems(category);
        let categoryWrapper = document.createElement("div");
        categoryWrapper.appendChild(categoryElement);
        categoryWrapper.classList.add("menu-category-wrapper");


        // add event listener to menu category title to expand/collapse category items on click
        let categorySelectedIndicator = categoryWrapper.querySelector(".category-indicator");
        let categoryTitle = categoryWrapper.querySelector(".menu-category-title");
        let categoryItems = categoryWrapper.querySelector(".menu-category-items");

        let categoryHeading = categoryWrapper.querySelector(".menu-category-heading");

        categoryHeading.addEventListener('click', function() {

            categoryItems.classList.toggle("menu-category-expand");
            categoryHeading.classList.toggle("menu-category-indicator-expand");

            let categorySelected = categoryItems.classList.contains("menu-category-expand");
            categorySelectedIndicator.innerHTML = categorySelected ? menuCategoryOpenIndicator : menuCategoryClosedIndicator;
        });

        menu.appendChild(categoryWrapper);
    }
}
