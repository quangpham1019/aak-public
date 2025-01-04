
function initializeNavbarItems() {
    let navItems = document.querySelectorAll('.nav-list .nav-item');

    navItems.forEach(item => {
        item.firstElementChild.addEventListener('click', function(event) {
            let curItem = event.currentTarget;

            swapContent(curItem);
            updateNavbarIndicator(curItem);
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

export default function initializeNavbar() {
    initializeNavbarItems();
    initializeLogo();
}