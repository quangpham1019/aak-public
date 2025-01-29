import initializeNavbar from "./initializeNavbar.js";
import {initializeMenuItems} from "./initializeMenuItems.js";
import initializeReviewsCarouselsScrolling from "./initializeReviewsCarouselsScrolling.js";
import initializeReviews from "./initializeReviews.js";
import {MenuCategory} from "./model/menuModels.js";
import {setUpAutoReviewContentSizing} from "./adjustReviewContentSizing.js";

$(document).ready(function () {

    initializeNavbar();
    initializeMenuItems();
    initializeReviews();
    initializeReviewsCarouselsScrolling();
    setUpAutoReviewContentSizing();

});
