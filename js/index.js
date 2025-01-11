import initializeNavbar from "./initializeNavbar.js";
import {initializeMenuItems} from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";
import initializeReviews from "./initializeReviews.js";
import {MenuCategory} from "./model/menuModels.js";
import {adjustReviewContentText} from "./adjustReviewContentSizing.js";

$(document).ready(function () {

    initializeNavbar();
    initializeMenuItems();
    initializeReviewsCarousels();
    initializeReviews();

    window.addEventListener('resize', () => {
        // get .selected within .nav-list
        // if selected id is "reviews-wrapper-nav", proceed with adjust review content
        let reviewsWrapperNavId = "reviews-wrapper-nav";
        let selectedNavItem = document.querySelector(".nav-list").querySelector(".selected");
        if (selectedNavItem?.id === reviewsWrapperNavId) {
            adjustReviewContentText();
        }
    });
});
