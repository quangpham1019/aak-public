// Set up 2 things
    // horizontal scrolling for carousel
    // prevent page scrolling while scrolling through carousel
import getReviews from "./data/reviewsData.js";

const reviews = getReviews();

export default function initializeReviewsCarouselsScrolling() {

    let carouselWrapperList = document.querySelectorAll(".carousel-wrapper");
    let scrollAmount;

    carouselWrapperList.forEach(carouselWrapper => {
        let leftButton = carouselWrapper.querySelector(".left-button-carousel");
        let rightButton = carouselWrapper.querySelector(".right-button-carousel");
        let curCarousel = carouselWrapper.querySelector(".carousel");

        leftButton.addEventListener('click', () => {

            curCarousel.scrollLeft -= curCarousel.offsetWidth;
        })
        rightButton.addEventListener('click', () => {
            curCarousel.scrollLeft += curCarousel.offsetWidth;
        })
    });
}
