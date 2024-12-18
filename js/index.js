$(document).ready(function() {


    let content = document.querySelector('.welcome-pane-content');
    let navItems = document.querySelectorAll('.nav-items h3');
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            let curItem = event.currentTarget;
            let toSwap = curItem.id.slice(0, -'-nav'.length);
            let toSwapEl = document.querySelector(`#${toSwap}`);

            let clone = toSwapEl.cloneNode(true);
            clone.style.visibility = "initial";
            content.replaceChildren(clone);
        })
    });

    let welcomeContent = document.querySelector('#welcome-content');
    let logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        let curClone = welcomeContent.cloneNode(true);
        content.replaceChildren(curClone);
    })

    logo.click();
});