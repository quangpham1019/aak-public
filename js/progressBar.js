$(document).ready(function() {
    const jDoc = $(document);
    const jWin = $(window);
    const jProgressBar = $("#progress-bar");
    const getCurrentScrollY = () => jWin.scrollTop();
    const getMaxScrollY = () => jDoc.height() - jWin.height();

    initializeProgressBar();
    initializePageSectionButtonsOnProgressBar();

    function initializeProgressBar() {
        jProgressBar.attr({ value: getCurrentScrollY(), max: getMaxScrollY() });
        addEventListenerForProgressBarOnScrollAndWindowResize();
    }
    function addEventListenerForProgressBarOnScrollAndWindowResize() {
        jDoc.on('scroll', () => {
            jProgressBar.attr({ value: getCurrentScrollY() });
        });
        jWin.on('resize', () => {
            jProgressBar.attr({ value: getCurrentScrollY(), max: getMaxScrollY() });
        })
    }
    function initializePageSectionButtonsOnProgressBar() {
        const menu = document.getElementById("menu-wrapper");
        const about = document.getElementById("about");
        const welcomePane = document.getElementById("welcome-pane");
        const operationHours = document.getElementById("operation-hours");
        const footer = document.getElementById("contact-us");

        let pageSectionList = [welcomePane, about, menu, operationHours, footer];
        let pageSection = document.getElementById("progress-bar-section");
        let curTree = document.createDocumentFragment();

        pageSectionList.forEach((section, index) => {
            let curPercent = Math.round((section.getBoundingClientRect().top + window.scrollY) / getMaxScrollY() * 100);

            // This solution expect there is only one section with height less than 30-50vh at the end of the page
            // If there are multiples section with such height, the page section buttons might overlap
            curPercent = curPercent < 100 ? curPercent : 100;

            let newEl = createAndAssignButtonPositionOnProgressBar(index, curPercent);

            newEl.addEventListener('click', () => {
                window.scroll(0, curPercent/100* getMaxScrollY());
            });
            curTree.appendChild(newEl);
        });
        pageSection.appendChild(curTree);
    }
    function createAndAssignButtonPositionOnProgressBar(index, curPercent) {
        let newEl = document.createElement("button");

        newEl.id = `button-${index+1}`;
        newEl.style.position = "absolute";
        newEl.style.left = `${curPercent}%`;

        return newEl;
    }
});