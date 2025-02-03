import initializeNavbar from "./initializeNavbar.js";
import {initializeMenuItems} from "./initializeMenuItems.js";
import initializeReviewsCarouselsScrolling from "./initializeReviewsCarouselsScrolling.js";
import initializeReviews from "./initializeReviews.js";
import {MenuCategory} from "./model/menuModels.js";
import {setUpAutoReviewContentSizing} from "./adjustReviewContentSizing.js";

$(document).ready(function () {
    window.addEventListener('load', () => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content-wrapper').style.visibility = 'initial';
        initializeNavbar();
        initializeMenuItems();
        initializeReviews();
        initializeReviewsCarouselsScrolling();
        setUpAutoReviewContentSizing();
    });
});
