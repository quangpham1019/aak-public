// Set up 2 things
    // horizontal scrolling for carousel
    // prevent page scrolling while scrolling through carousel
import getReviews from "./data/reviewsData.js";

const reviews = getReviews();

export default function initializeReviewsCarousels() {

    let carouselWrapperList = document.querySelectorAll(".carousel");
    let scrollAmount;

    function scrollHorizontally(e) {
        e.preventDefault();

        let curCarousel = e.currentTarget;

        scrollAmount = curCarousel.offsetWidth;

        if (e.deltaY > 0) curCarousel.scrollLeft += scrollAmount;
        else curCarousel.scrollLeft -= scrollAmount;
    }

    onresize = (event) => {
        scrollAmount = carouselWrapperList[0].offsetWidth/3;
    };

    carouselWrapperList.forEach(carousel => {
        carousel.onwheel = scrollHorizontally;
    });

}
