import initializeNavbar from "./initializeNavbar.js";
import {initializeMenuItems} from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";
import initializeReviews from "./initializeReviews.js";
import {MenuCategory} from "./model/menuModels.js";
import {allData} from "./data/reviewsData.js";

let prevWindowWidth = window.innerWidth;
let prevWindowHeight = window.innerHeight;

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

export function adjustReviewContentText() {
    let carouselSlides = document.querySelectorAll(".carousel-slide");

    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;

    carouselSlides.forEach(carouselSlide => {
        let reviewHeading = carouselSlide.querySelector(".review-heading");
        let ratingWrapper = carouselSlide.querySelector(".rating-wrapper");
        let reviewContent = carouselSlide.querySelector(".review-content");
        let reviewContentStyle = window.getComputedStyle(reviewContent);

        let carouseSlideStyle = window.getComputedStyle(carouselSlide);
        let carouselSlideHeight = carouselSlide.offsetHeight - parseFloat(carouseSlideStyle.paddingTop) - parseFloat(carouseSlideStyle.paddingBottom);

        let boxHeight = carouselSlideHeight - (reviewHeading.offsetHeight+ratingWrapper.offsetHeight);
        let lineHeight = parseInt(reviewContentStyle.getPropertyValue("line-height"));
        let maxNumOfLine = Math.floor(boxHeight / lineHeight); // determine using height of box, Math.floor(height / lineHeight)
        let maxHeight = lineHeight * maxNumOfLine + 1;

        let font = reviewContentStyle.getPropertyValue("font");
        let ellipsis = "...";
        let myElement = carouselSlide.querySelector(".review-content");

        let authorName = carouselSlide.querySelector(".author-name").innerText;
        let originalText = getReviewByAuthor(authorName); // set to the review content
        let originalTextWidth = getTextWidth(originalText, font);

        console.log(currentWindowWidth);
        console.log(prevWindowWidth);

        if (currentWindowWidth > prevWindowWidth || currentWindowHeight > prevWindowHeight) {
            // console.log('Window size increasing');

            let curTextHasEllipsis = myElement.innerText.substring(myElement.innerText.length - ellipsis.length) === ellipsis;
            let curTextWithoutEllipsis = curTextHasEllipsis ? myElement.innerText.substring(0, myElement.innerText.length -ellipsis.length) : myElement.innerText;
            if (getTextWidth(curTextWithoutEllipsis, font) < originalTextWidth) {
                console.log("restoring text");
                restoringText(myElement);
            }

        } else if (currentWindowWidth < prevWindowWidth || currentWindowHeight < prevWindowHeight) {
            // console.log('Window size decreasing');

            if (detectOverflow(myElement)) {
                console.log("trimming text");
                trimText(myElement);
            }
        }

        function detectOverflow(element) {
            return element.scrollHeight > maxHeight;
        }
        function restoringText(element) {
            // remove ellipsis -> curText
            // get length of curText
            // let prevSubstring,
            // substring = substring of originalText from 0 to curText.Length

            // loop from i = 1 to i = originalText.length
            // prevSubstring = substring
            // subtring = substring of originalText from 0 to curText.length+i
            // if curText.length+i == originalText.length,
            // stringToCompare = substring,
            // else stringToCompare = substring + "..."
            // if adding stringToCompare to element.innerText does not increase the scrollHeight pass limit
            // repeat from get substring until curText.length+i > originalText.length
            // else
            // stringToCompare = prevSubstring

            // set element.innerText = stringToCompare;

            let curText = element.innerText.substring(0, element.innerText.length-3);
            let prevSubstring, stringToCompare;
            let substring = originalText.substring(0, curText.length);
            let i = 1;

            for (let i = 1; i <= originalText.length - curText.length; i++) {
                prevSubstring = substring;
                substring = originalText.substring(0, curText.length+i);
                stringToCompare = curText.length+i === originalText.length ? substring : substring + "...";
                element.innerText = stringToCompare;

                if (element.scrollHeight > maxHeight) {
                    element.innerText = prevSubstring + "...";
                    break;
                }
            }
        }
        function trimText(element) {
            let initialText = element.innerText;
            let i = 1;
            while (element.scrollHeight > maxHeight) {
                element.innerText = initialText.substring(0, initialText.length-i) + "...";
                i++;
            }
        }
        function getTextWidth(text, font) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = font;
            const metrics = context.measureText(text);
            return metrics.width;
        }
        function getReviewByAuthor(authorName) {
            let reviewContent;

            allData.forEach(data => {
                if (data.authorName === authorName) {
                    reviewContent = data.text;
                }
            });

            return reviewContent;
        }
    });

    prevWindowWidth = currentWindowWidth;
    prevWindowHeight = currentWindowHeight;
}

export function trimIfNeeded() {
    let carouselSlides = document.querySelectorAll(".carousel-slide");
    carouselSlides.forEach(carouselSlide => {
        let reviewHeading = carouselSlide.querySelector(".review-heading");
        let ratingWrapper = carouselSlide.querySelector(".rating-wrapper");
        let reviewContent = carouselSlide.querySelector(".review-content");
        let reviewContentStyle = window.getComputedStyle(reviewContent);

        let carouseSlideStyle = window.getComputedStyle(carouselSlide);
        let carouselSlideHeight = carouselSlide.offsetHeight - parseFloat(carouseSlideStyle.paddingTop) - parseFloat(carouseSlideStyle.paddingBottom);

        let boxHeight = carouselSlideHeight - (reviewHeading.offsetHeight + ratingWrapper.offsetHeight);
        let lineHeight = parseInt(reviewContentStyle.getPropertyValue("line-height"));
        let maxNumOfLine = Math.floor(boxHeight / lineHeight); // determine using height of box, Math.floor(height / lineHeight)
        let maxHeight = lineHeight * maxNumOfLine + 1;

        let font = reviewContentStyle.getPropertyValue("font");
        let ellipsis = "...";
        let myElement = carouselSlide.querySelector(".review-content");

        let authorName = carouselSlide.querySelector(".author-name").innerText;
        let originalText = getReviewByAuthor(authorName); // set to the review content
        let originalTextWidth = getTextWidth(originalText, font);

        if (detectOverflow(myElement)) {
            trimText(myElement);
        }

        function detectOverflow(element) {
            return element.scrollHeight > maxHeight;
        }
        function trimText(element) {
            let initialText = element.innerText;
            let i = 1;
            while (element.scrollHeight > maxHeight) {
                element.innerText = initialText.substring(0, initialText.length-i) + "...";
                i++;
            }
        }
        function getTextWidth(text, font) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = font;
            const metrics = context.measureText(text);
            return metrics.width;
        }
        function getReviewByAuthor(authorName) {
            let reviewContent;

            allData.forEach(data => {
                if (data.authorName === authorName) {
                    reviewContent = data.text;
                }
            });

            return reviewContent;
        }
    });
}