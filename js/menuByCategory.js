$(document).ready(function () {

    const menus = document.querySelectorAll('.menuElement')
    menus.forEach(menu => {
        menu.addEventListener('click', function (event) {
            const menu = event.currentTarget;
            const left = menu.offsetLeft;

            let stringToSlice = "menu";
            let menuIdNum = menu.id.slice(stringToSlice.length);

            let menuDict = {
                'menu1': '#ffcc80',
                'menu2': '#81d4fa',
                'menu3': '#c5e1a5',
                'menu4': '#ce93d8'
            }

            move(menuIdNum, menuDict[menu.id], left);
        });
    })

    $("#menu3").click();
});

function move(id, color, leftOffset) {
    let curBubble = $(`#bubble${id}`);
    let bgBubble = $("#bgBubble");

    let curBubbleDiameter = curBubble.css("width");
    let bgBubbleDiameter = bgBubble.css("width");

    let additionalOffset = (parseInt(bgBubbleDiameter) - parseInt(curBubbleDiameter))/2;
    let totalLeftOffset = leftOffset-additionalOffset;

    let bgWrapperWidth = $("#bgWrapper").css("width");
    let percentageLeftOffset = (totalLeftOffset/parseInt(bgWrapperWidth))*100;

    let tl = gsap.timeline();
    tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
        .to("#bubble1", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble2", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble3", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble4", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
        .to("#bgBubble", {duration: 0.2, left: `${percentageLeftOffset}%`, ease: "ease-in-out"}, 0.1)
        .to("#bgBubble", {duration: 0.15, bottom: `-${curBubbleDiameter}`, ease: "ease-out"}, '-=0.2')
        .to(`#bubble${id}`, {
            duration: 0.15,
            y: "0%",
            opacity: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            ease: "ease-out"
        }, '-=0.1')
        .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
        .to("#menuContainer", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
        .to("#bg", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
        .to("#bgBubble", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
    changeMenuContent(id);
}

function changeMenuContent(id) {

    // remove class from #menuContent
    // update #menuContent with new class "<category>-item-wrapper"

    // remove all child of menuContent
    // generate div for each item that belong to the class

    // update each div with new class "<category>-item"

    var menuDict = {
        1: "soup",
        2: "rice",
        3: "ice-cream",
        4: "drink"
    }

    let menuContent = document.querySelector("#menuContent");

    // remove all class from #menuContent
    // add wrapper class pertaining to current menu category
    menuContent.classList.forEach(curClass => {
        menuContent.classList.remove(curClass);
    })
    menuContent.classList.add(`${menuDict[id]}-item-wrapper`);

    // delete all children of menuContent
    // get the menu based on menu category
    // for each menu item, create a div with name, price
    menuContent.replaceChildren();
    let menuItemList = getMenuItem(menuDict[id]);
    Object.keys(menuItemList).forEach(item => {
        let newEl = document.createElement("div");

        // create each element for item representation (name, price, image?)
        let itemName = document.createElement("h1");
        itemName.innerText = item;
        let itemPrice = document.createElement("p");
        itemPrice.innerText = menuItemList[item];

        // add all the children element to newEl
        // add the <category>-item class for newEl
        // add newEl to menuContent
        newEl.replaceChildren(itemName, itemPrice);
        newEl.classList.add(`${menuDict[id]}-item`);
        menuContent.appendChild(newEl);
    })
}

function getMenuItem(itemCategory) {
    let iceCream = {
        "chocolate" : 5,
        "mango": 5,
        "vanilla": 5,
        "coffee": 6,
        "durian": 5,
        "strawberry": 4
    };

    let soup = {
        "pho dac biet": 17,
        "tai nam": 15,
        "pho suon bo": 20,
        "hu tieu mi": 16,
        "curry": 17
    };

    let rice = {
        "banh mi": 8,
        "bun cha gio": 14,
        "filet mignon noodle": 16
    };

    let drink = {
        "boba": 7,
        "smoothies": 7,
        "tea": 6,
        "coffee": 6
    };

    let categoryDict = {
        "ice-cream" : iceCream,
        soup,
        rice,
        drink
    }

    return categoryDict[itemCategory];
}