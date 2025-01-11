import initializeNavbar from "./initializeNavbar.js";
import {initializeMenuItems} from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";
import initializeReviews from "./initializeReviews.js";
import {MenuCategory} from "./model/menuModels.js";
import {setUpAutoReviewContentSizing} from "./adjustReviewContentSizing.js";

$(document).ready(function () {

    initializeNavbar();
    initializeMenuItems();
    initializeReviewsCarousels();
    initializeReviews();

    setUpAutoReviewContentSizing();

});
