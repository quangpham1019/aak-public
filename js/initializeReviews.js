import getData from "./data/reviewsData.js";
import { MenuComponent, MenuItem, MenuCategory, Img } from "./model/menuModels.js";

const googleReviewData = getData();

export function initializeReviews() {
    let googleReviewCarousel = document.querySelector("#google-reviews-carousel");
    let googleReviewsFragment = LayoutUtility.execute(googleReviewData);

    addEventListenersToCategoryHeadingClickers(googleReviewsFragment);

    googleReviewCarousel.appendChild(googleReviewsFragment);
}
function addEventListenersToCategoryHeadingClickers(googleReviewsFragment) {
    let g = googleReviewsFragment.querySelectorAll(".menu-category-wrapper");
    // menuCategoryWrappers.forEach(menuCategoryWrapper => {
    //     let categoryHeadingClicker = menuCategoryWrapper.querySelector(".category-heading-clicker");
    //     let categorySelectedIndicator = menuCategoryWrapper.querySelector(".category-indicator");
    //     let categoryItems = menuCategoryWrapper.querySelector(".menu-category-items");
    //     let categoryHeading = menuCategoryWrapper.querySelector(".menu-category-heading");
    //
    //     categoryHeadingClicker.addEventListener('click', function() {
    //
    //         categoryItems.classList.toggle("menu-category-expand");
    //         categoryHeading.classList.toggle("menu-category-indicator-expand");
    //
    //         let categorySelected = categoryItems.classList.contains("menu-category-expand");
    //         categorySelectedIndicator.innerHTML = categorySelected ? menuCategoryOpenIndicator : menuCategoryClosedIndicator;
    //     });
    // });
}

class LayoutUtility {

    static _resultFragment;

    static execute(menuCategory) {
        this._resultFragment = document.createDocumentFragment();
        this.#traverseMenuCategoryAndApplyDesign(menuCategory, this._resultFragment);
        return this._resultFragment;
    }

    static #traverseMenuCategoryAndApplyDesign(menuCategory, tree) {

        // choose LAYOUT_DESIGN_1 for current menuCategory
        const [layoutDesigns, classNames] = LayoutDesignFactory.getLayoutDesign(menuCategory);
        const [categoryLayoutDesign, itemLayoutDesign] = layoutDesigns;
        const [itemsWrapperClass, itemsClass] = classNames;
        let categoryElement, itemsWrapper;

        // Ignore the top layer div with id="menu"
        if (menuCategory.name === "menu")  {

            categoryElement = document.createDocumentFragment();
            itemsWrapper = categoryElement;
        } else {

            categoryElement = document.createElement("div");
            categoryElement.id = `${menuCategory.name}`;

            // apply LAYOUT_DESIGN_1 to current menuCategory
            categoryLayoutDesign.applyDesign(categoryElement);
            itemsWrapper = categoryElement.querySelector(`.${itemsWrapperClass}`);

        }

        // choose a LAYOUT_DESIGN_2 for menuItems
        // traverse and create menu items
        menuCategory?.menuItems?.forEach(menuItem => {
            // apply LAYOUT_DESIGN_2 to menuItem
            // result is FRAGMENT_SUB_2
            // append FRAGMENT_SUB_2 as child to FRAGMENT_SUB_1
            let itemElement = document.createElement("div");
            itemElement.classList.add(itemsClass);
            itemLayoutDesign.menuComponent = menuItem;
            itemLayoutDesign.applyDesign(itemElement);

            itemsWrapper.appendChild(itemElement);
        });

        menuCategory?.menuCategories?.forEach(menuCategory => {
            // create FRAGMENT_SUB_3
            // apply recursively #traverseMenuCategoryAndApplyDesign on menuCategory and FRAGMENT_SUB_3
            // add FRAGMENT_SUB_3 to FRAGMENT_SUB_1
            let newFrag = document.createDocumentFragment();
            this.#traverseMenuCategoryAndApplyDesign(menuCategory, newFrag);

            itemsWrapper.appendChild(newFrag);
        });

        // append FRAGMENT_SUB_1 as child to tree
        tree.appendChild(categoryElement);
    }
}
class LayoutDesignFactory {
    static getLayoutDesign(sourcePlatform) {
        let categoryLayoutDesign;
        let itemsWrapperClass, itemsClass;

        switch (sourcePlatform) {
            default:
                categoryLayoutDesign = new GoogleReviewLayoutDesign(sourcePlatform);
                itemsClass = "carousel-slide";
                break;
        }

        return [categoryLayoutDesign, itemsClass];
    }
}
class LayoutDesign {

    _menuComponent;
    _designResult;

    constructor(menuComponent) {
        if (this.constructor === LayoutDesign) {
            throw new Error("Abstract class can't be instantiated.");
        }
        this._menuComponent = menuComponent;
    }

    get menuComponent() {
        return this._menuComponent;
    }
    set menuComponent(menuComponent) {
        this._menuComponent = menuComponent;
    }

    get result() {
        return this._designResult;
    }
    set result(result) {
        this._designResult = result;
    }

    applyDesign() {
        throw new Error("Method must be implemented by child class.")
    }

    getDesignResult() {
        return this._designResult;
    }
}
class GoogleReviewLayoutDesign extends LayoutDesign {

    constructor(menuComponent) {
        super(menuComponent);
    }

    applyDesign(designingElement) {
        // <!--*********************
        //     .carousel-slide LAYOUT
        // **********************-->
        // <div class="carousel-slide">
        //     <div class="review-heading">
        //         <div class="user-image-wrapper">
        //             <img src="https://lh3.googleusercontent.com/a-/ALV-UjW3uZq6ZrTOGjY3LZo11nJ6ZWCCFX1adXuh2bJBWIqqGpA6InIuhg=w60-h60-p-rp-mo-ba3-br100" alt="imagem de um usuário google" id = "user-image">
        //         </div>
        //         <div class="review-heading-box-text">
        //             <p id= "top-container-name"> Moisés José da Silva </p>
        //             <p id= "top-container-date"> 02-03-2005 </p>
        //         </div>
        //         <div class="google-logo-wrapper">
        //             <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="google logo" id= "google-logo">
        //         </div>
        //     </div>
        //     <div class="rating-wrapper">
        //         <p id= "stars">★★★★★</p>
        //         <img src="https://cdn-icons-png.freepik.com/256/10629/10629607.png?semt=ais_hybrid" alt=" Verified badge" id="verification-badge">
        //     </div>
        //     <div class="review-content-wrapper">
        //         <p class="review-content">Muito Top! Mudou minha oficina!</p>
        //     </div>
        // </div>


        designingElement.classList.add("menu-category-wrapper");
        let categoryHeading = document.createElement("div");

        let categoryTitle = document.createElement("div");
        categoryTitle.innerText = this._menuComponent.name;
        categoryTitle.classList.add("menu-category-title");

        let categorySelectedIndicator = document.createElement("div");
        categorySelectedIndicator.innerHTML = menuCategoryClosedIndicator;
        categorySelectedIndicator.classList.add("category-indicator");

        let categoryHeadingClicker = document.createElement("div");
        categoryHeadingClicker.classList.add("category-heading-clicker");
        categoryHeadingClicker.replaceChildren(categorySelectedIndicator, categoryTitle);

        categoryHeading.replaceChildren(categoryHeadingClicker);
        categoryHeading.classList.add("menu-category-heading");
        designingElement.appendChild(categoryHeading);

        let menuItemsWrapper = document.createElement("div");
        menuItemsWrapper.classList.add("menu-category-items");

        designingElement.appendChild(menuItemsWrapper);
    }
}

