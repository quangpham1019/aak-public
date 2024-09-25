let menuCategoryData = {
    'soup': {
        'icon': 'fa-solid fa-pizza-slice',
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
    }
}

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

            move(menuCategory, menuCategoryData[menuCategory].backgroundColor, leftOffsetForCurrentMenuIcon);
        });
    })
}
function move(menuCategory, menuBackgroundColor, leftOffset) {
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
    return (totalLeftOffset / parseInt(bgWrapperWidth)) * 100;
}
function changeMenuContent(menuCategory) {

    let menuContent = document.querySelector("#menu-content");
    menuContent.className = `${menuCategory}-item-wrapper`;

    let tree = document.createDocumentFragment();
    let menuItemList = menuCategoryData[menuCategory].items;

    Object.keys(menuItemList).forEach(item => {
        let newEl = document.createElement("div");

        let itemName = document.createElement("h1");
        itemName.innerText = item;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = menuItemList[item];

        newEl.replaceChildren(itemName, itemPrice);
        newEl.className = `${menuCategory}-item`;
        tree.appendChild(newEl);
    })
    
    menuContent.replaceChildren(tree);
}