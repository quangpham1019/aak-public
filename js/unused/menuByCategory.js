let menuCategoryData = {
    'special': {
        'icon': 'fa-solid fa-star',
        'backgroundColor': '#ffcc80',
        'items': {
            'pho dac biet': 17,
            'tai nam': 15,
            'pho suon bo': 20,
            'hu tieu mi': 16,
            'curry': 17
        }
    },
    'rice': {
        'icon': 'fa-solid fa-bowl-food',
        'backgroundColor': '#81d4fa',
        'items': {
            'banh mi': 8,
            'bun cha gio': 14,
            'filet mignon noodle': 16
        }
    },
    'ice-cream': {
        'icon': 'fa-solid fa-ice-cream',
        'backgroundColor': '#c5e1a5',
        'items': {
            'chocolate': 5,
            'mango': 5,
            'vanilla': 5,
            'coffee': 6,
            'durian': 5,
            'strawberry': 4
        }
    },
    'drink': {
        'icon': 'fa-solid fa-glass-water',
        'backgroundColor': '#ce93d8',
        'items': {
            'boba': 7,
            'smoothies': 7,
            'tea': 6,
            'coffee': 6
        }
    },
    'catering': {
        'icon': 'fa-solid fa-bell-concierge',
        'backgroundColor': '#ce93d8',
        'items': {
            'chicken wings 25pcs': 25,
            'egg rolls 20cps': 20,
        }
    }
}

// TODO: add second navigation bar for drink
// TODO: consider using flexbox for bg-wrapper with placeholder, when clicking a menu icon, the bg-bubble will snap
//  to the corresponding flex child of bg-wrapper,
//      TODO: learn GSAP to integrate with flexbox animation

$(document).ready(function () {

    initializeMenuCategory();
    addEventListenerToMenuCategoryIcon();
    $("#menu-ice-cream").click();

});

function initializeMenuCategory() {
    initializeMenuCategoryBubbleWrapper();
    initializeMenuCategoryIconWrapper();
}
function initializeMenuCategoryBubbleWrapper() {
    let menuCategoryBubbleWrapper = document.querySelector("#menu-category-bubble-wrapper");
    let tree = document.createDocumentFragment();

    Object.keys(menuCategoryData).forEach(category => {
        let bubble = document.createElement("div");
        bubble.id = `bubble-${category}`;
        bubble.className = "bubble";

        let span = document.createElement("span");
        span.className = "icon";

        let i = document.createElement("i");
        i.className = menuCategoryData[category].icon;

        span.appendChild(i);
        bubble.appendChild(span);
        tree.appendChild(bubble);
    })
    menuCategoryBubbleWrapper.appendChild(tree);
}
function initializeMenuCategoryIconWrapper() {
    let menuCategoryIconWrapper = document.querySelector("#menu-category-icon-wrapper");
    let tree = document.createDocumentFragment();

    Object.keys(menuCategoryData).forEach(category => {
        let menu = document.createElement("div");
        menu.id = `menu-${category}`;
        menu.className = "menu-icon";

        let i = document.createElement("i");
        i.className = menuCategoryData[category].icon;

        menu.appendChild(i);
        tree.appendChild(menu);
    })
    menuCategoryIconWrapper.appendChild(tree);
}

function addEventListenerToMenuCategoryIcon() {
    const menuCategoryIcons = document.querySelectorAll('.menu-icon')
    menuCategoryIcons.forEach(menuIcon => {
        menuIcon.addEventListener('click', function (event) {
            let menuIcon = event.currentTarget;
            let leftOffsetForCurrentMenuIcon = menuIcon.offsetLeft;
            let menuCategory = menuIcon.id.slice('-menu'.length);

            moveBgBubbleAndCategoryBubble(menuCategory, menuCategoryData[menuCategory].backgroundColor, leftOffsetForCurrentMenuIcon);
        });
    })
}
function moveBgBubbleAndCategoryBubble(menuCategory, menuBackgroundColor, leftOffset) {
    let curBubble = $(`#bubble-${menuCategory}`);
    let curBubbleDiameter = curBubble.css("width");
    let percentageLeftOffset = calculateLeftOffsetOfMenuCategoryIcon(curBubbleDiameter, leftOffset);

    let tl = gsap.timeline();
    Object.keys(menuCategoryData).forEach(category => {
        tl.to(`#bubble-${category}`, {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0);
    });
    tl.to("#bg-bubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
      .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
      .to("#bg-bubble", {duration: 0.2, left: `${percentageLeftOffset}%`, ease: "ease-in-out"}, 0.1)
      .to("#bg-bubble", {duration: 0.15, bottom: `-${curBubbleDiameter}`, ease: "ease-out"}, '-=0.2')
      .to(`#bubble-${menuCategory}`, {
          duration: 0.15,
          y: "0%",
          opacity: 1,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          ease: "ease-out"
        }, '-=0.1')
      .to(`#bubble-${menuCategory}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
      .to("#menu-container", {duration: 0.3, backgroundColor: menuBackgroundColor, ease: "ease-in-out"}, 0)
      .to("#bg", {duration: 0.3, backgroundColor: menuBackgroundColor, ease: "ease-in-out"}, 0)
      .to("#bg-bubble", {duration: 0.3, backgroundColor: menuBackgroundColor, ease: "ease-in-out"}, 0)

    changeMenuContent(menuCategory);
}
function calculateLeftOffsetOfMenuCategoryIcon(curBubbleDiameter, leftOffset){

    let bgBubbleDiameter = $("#bg-bubble").css("width");

    let leftOffsetAdjustment = -(parseInt(bgBubbleDiameter) - parseInt(curBubbleDiameter)) / 2;
    let totalLeftOffset = leftOffset + leftOffsetAdjustment;

    let bgWrapperWidth = $("#bg-wrapper").css("width");
    return totalLeftOffset/ parseInt(bgWrapperWidth) * 100;
}
function changeMenuContent(menuCategory) {

    let menuContent = document.querySelector("#menu-content");

    // TODO: it seems I only need one instance of MenuDesignFactory,
    //      this could be a good place to apply Singleton pattern
    let menuDesignFactory = new MenuDesignFactory(menuCategory);
    let curMenuDesign = menuDesignFactory.getMenuDesign();
    curMenuDesign.createMenuCategoryLayout();
    menuContent.className = curMenuDesign.getMenuDesignClasses();
    menuContent.replaceChildren(curMenuDesign.getTree());
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
                this._menuDesign = new SpecialMenuDesign(menuCategory);
                console.log("using SpecialMenuDesign");
                break;
            case "rice":
            case "drink":
            case "catering":
                this._menuDesign = new RowMenuDesign(menuCategory);
                console.log("using RowMenuDesign");
                break;
            case "ice-cream":
                this._menuDesign = new FlavorAndPriceMenuDesign(menuCategory);
                console.log("using FlavorAndPriceMenuDesign");
                break;
            default:
                this._menuDesign = new RowMenuDesign(menuCategory);
                console.log("using default design (ROW)");
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
        this._tree = document.createDocumentFragment();

        Object.keys(this._menuItems).forEach(item => {
            this.createItemLayout(item);
        })
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
// class FlavorAndPriceMenuDesign extends MenuDesign {
//     constructor(menuCategory) {
//         super();
//         this._menuCategory = menuCategory;
//         this._menuItems = menuCategoryData[menuCategory].items;
//
//         // change css design-wrapper for #menuContent here
//         // MENU-LAYOUT-CSS-STYLE
//         // TODO: which design pattern can I apply if
//         //      I expect multiple menu-css-style for this menu item design
//         //      and the number of menu item design will also grow huge
//         //      (ie. menu-css-styles * item-designs * item-css-styles)
//         this._menuDesignClasses = `flavor-and-price-design-wrapper`;
//     }
//
//     createItemLayout(item)   {
//
//         // change layout for each menu design here
//         // ITEM-LAYOUT
//         // must match format of MENU-LAYOUT-CSS-STYLE or else the display might break
//         let newEl = document.createElement("div");
//
//         let itemName = document.createElement("h1");
//         itemName.innerText = item;
//         let itemPrice = document.createElement("p");
//         itemPrice.innerText = this._menuItems[item];
//         let description = document.createElement("p");
//         description.innerText = "Flavor and price design is exclusively tailored for ice cream";
//
//         newEl.replaceChildren(itemName, itemPrice, description);
//
//         // change css item class for each menu item here
//         // ITEM-CSS-STYLE
//         newEl.className = `${this._menuCategory}-item`;
//
//         this._tree.appendChild(newEl);
//     }
// }
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
class SpecialMenuDesign extends MenuDesign {
    constructor(menuCategory) {
        super();
        this._menuCategory = menuCategory;
        this._menuItems = menuCategoryData[this._menuCategory].items;
        this._menuDesignClasses = `special-design-wrapper`;
    }

    createItemLayout(item)   {
        let newEl = document.createElement("div");

        let itemName = document.createElement("h1");
        itemName.innerText = item;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = this._menuItems[item];
        let description = document.createElement("p");
        description.innerText = `This special menu design will feature exclusive items`;

        newEl.replaceChildren(itemName, itemPrice, description);
        newEl.className = `${this._menuCategory}-item`;

        this._tree.appendChild(newEl);
    }
}