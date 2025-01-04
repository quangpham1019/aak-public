// Set up 2 things
    // horizontal scrolling for carousel
    // prevent page scrolling while scrolling through carousel

export default function initializeCarousel() {

    let carouselWrapperList = document.querySelectorAll(".carousel");

    let carouselWidth = carouselWrapperList[0].offsetWidth;
    let scrollAmount = carouselWidth/3;

    function scrollHorizontally(e) {
        e.preventDefault();


        let curCarousel = e.currentTarget;

        if (e.deltaY > 0) curCarousel.scrollLeft += scrollAmount;
        else curCarousel.scrollLeft -= scrollAmount;
    }

    onresize = (event) => {
        carouselWidth = carouselWrapperList[0].offsetWidth;
        scrollAmount = carouselWidth/3;
    };

    carouselWrapperList.forEach(carousel => {
        carousel.onwheel = scrollHorizontally;
    });

}
