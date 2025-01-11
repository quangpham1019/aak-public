import { trimIfNeeded } from "./adjustReviewContentSizing.js";

function initializeNavbarItems() {
    let navItems = document.querySelectorAll('.nav-list .nav-item');

    navItems.forEach(item => {
        item.firstElementChild.addEventListener('click', function(event) {
            let curItem = event.currentTarget;

            swapContent(curItem);
            updateNavbarIndicator(curItem);

            let reviewsWrapperNavId = "reviews-wrapper-nav";
            if (curItem.id === reviewsWrapperNavId) {
                trimIfNeeded();
            }
        })
    });
}
function swapContent(curItem) {

    // Nav items must have id in the format of "{id-of-section-to-display}-nav"

    let contentComponents = document.querySelector("#content-wrapper-components");
    let content = document.querySelector('#content-wrapper-content');
    let toSwap = curItem.id.slice(0, -'-nav'.length);
    let toSwapEl = document.querySelector(`#${toSwap}`);
    let curElDisplay = content.children[0];

    if (toSwapEl != null) {
        // let clone = toSwapEl.cloneNode(true);
        contentComponents.appendChild(curElDisplay);
        content.replaceChildren(toSwapEl);
    } else {
        console.log("cannot find content to substitute");
    }
}
function updateNavbarIndicator(curItem) {
    let selected = $(".selected");
    selected.removeClass("selected");
    curItem.classList.add("selected");

    // auto close navbar for small screen
    // let navLabel = document.querySelector("#nav-toggle label");
    // navLabel.click();
}

function initializeLogo() {

    let contentComponents = document.querySelector("#content-wrapper-components");

    let content = document.querySelector('#content-wrapper-content');
    let welcomeContent = document.querySelector('#welcome')
    let logo = document.querySelector('.logo');

    logo.addEventListener('click', function(event) {

        let curElDisplay = content.children[0];

        if (curElDisplay != null) {
            contentComponents.appendChild(curElDisplay);
        }

        content.replaceChildren(welcomeContent);

        let selected = $(".selected");
        selected.removeClass("selected");
    })

    logo.click();
}

function initializeNavbarToggle() {
    let navbarToggle = document.querySelector("#nav-btn");

    navbarToggle.addEventListener('click', openNavbar);
}
function openNavbar(event) {
    // console.log("opening navbar");

    let navbarCheckbox = document.querySelector("#nav-check");
    let html = document.documentElement;

    if (!navbarCheckbox.checked) {
        event.stopImmediatePropagation();

        // console.log("adding listener to html");
        document.onclick = closeNavbar;
    }
}
function closeNavbar(event) {

    let clickedElement = event.target;
    if (clickedElement.id === "nav-check" || clickedElement.id === "nav-toggle-label") {
        return;
    }

    // console.log(clickedElement);

    let navbarCheckbox = document.querySelector("#nav-check");
    navbarCheckbox.checked = false;
    // console.log("closing navbar");
    // console.log("removing document onclick listener");

    document.onclick = null;
}

export default function initializeNavbar() {
    initializeNavbarItems();
    initializeLogo();
    initializeNavbarToggle();
}