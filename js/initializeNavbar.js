
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
    let content = document.querySelector('.content-wrapper-content');
    let toSwap = curItem.id.slice(0, -'-nav'.length);
    let toSwapEl = document.querySelector(`#${toSwap}`);

    if (toSwapEl != null) {
        let clone = toSwapEl.cloneNode(true);
        clone.style.visibility = "initial";
        content.replaceChildren(clone);
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
    let content = document.querySelector('.content-wrapper-content');
    let welcomeContent = document.querySelector('#welcome')
    let logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        let curClone = welcomeContent.cloneNode(true);
        content.replaceChildren(curClone);

        let selected = $(".selected");
        selected.removeClass("selected");
    })

    logo.click();
}

export function initializeNavbar() {
    initializeNavbarItems();
    initializeLogo();
}