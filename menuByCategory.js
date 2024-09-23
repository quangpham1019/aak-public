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

            $(window).resize()
            move(menuIdNum, menuDict[menu.id], left);
        });
    })

    $("#menu3").click();

    const heightOutput = document.querySelector("#height");
    const widthOutput = document.querySelector("#width");

    function reportWindowSize() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
        console.log("resizing window");
    }

    window.onresize = reportWindowSize;
});

function move(id, color, leftOffset) {
    let curBubble = $(`#bubble${id}`);
    let curBubbleDiameter = curBubble.css("width");
    let bgBubbleDiameter = $("#bgBubble").css("width");
    let additionalOffset = (parseInt(bgBubbleDiameter) - parseInt(curBubbleDiameter))/2;

    let tl = gsap.timeline();
    tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
        .to("#bubble1", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble2", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble3", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to("#bubble4", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
        .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
        .to("#bgBubble", {duration: 0.2, left: leftOffset - additionalOffset, ease: "ease-in-out"}, 0.1)
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
    var menuContent = $(`#menuContent`);
    menuContent.removeClass();

    var menuDict = {
        1: "soup-item-wrapper",
        2: "rice-item-wrapper",
        3: "ice-cream-item-wrapper",
        4: "drink-item-wrapper"
    }

    menuContent.addClass(menuDict[id]);
    // return true;
}