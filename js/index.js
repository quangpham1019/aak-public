import initializeNavbar from "./initializeNavbar.js";
import { initializeMenuItems } from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";
import {MenuCategory} from "./model/menuModels.js";

$(document).ready(function() {

    initializeNavbar();
    initializeMenuItems();
    initializeReviewsCarousels();

});