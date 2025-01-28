import {allData} from "./data/reviewsData.js";

export function setUpAutoReviewContentSizing() {
    window.addEventListener('resize', () => {
        let reviewsWrapperNavId = "reviews-wrapper-nav";
        let selectedNavItem = document.querySelector(".nav-list").querySelector(".selected");
        if (selectedNavItem?.id === reviewsWrapperNavId) {
            adjustReviewContentText();
        }
    });
}

// TODO: use observer to avoid forced reflow
export function adjustReviewContentText() {
    let carouselSlides = document.querySelectorAll(".carousel-slide");

    let renderingMap = {};

    carouselSlides.forEach(carouselSlide => {
        let reviewHeading = carouselSlide.querySelector(".review-heading");
        let ratingWrapper = carouselSlide.querySelector(".rating-wrapper");
        let reviewContent = carouselSlide.querySelector(".review-content");
        let reviewContentStyle = window.getComputedStyle(reviewContent);

        let carouseSlideStyle = window.getComputedStyle(carouselSlide);
        let carouselSlideHeight = carouselSlide.offsetHeight - parseFloat(carouseSlideStyle.paddingTop) - parseFloat(carouseSlideStyle.paddingBottom);

        let boxHeight = carouselSlideHeight - (reviewHeading.offsetHeight +ratingWrapper.offsetHeight) - 10;
        let lineHeight = parseInt(reviewContentStyle.getPropertyValue("line-height"));
        let maxNumOfLine = Math.floor(boxHeight / lineHeight);
        let maxWidth = parseInt(reviewContentStyle.getPropertyValue("width"));

        let font = reviewContentStyle.getPropertyValue("font");

        let authorName = carouselSlide.querySelector(".author-name").innerText;
        let originalText = getReviewByAuthor(authorName); // set to the review content

        measureAndRetrieveTextLinePerTextWidth(originalText, reviewContent);

        function getReviewByAuthor(authorName) {
            return allData.find(data => data.authorName === authorName).text;
        }
        function measureAndRetrieveTextLinePerTextWidth(originalText) {
            let text = originalText.split(' ');

            let cutOffLine = "", replacingContent = "";
            let allTextContained = false;

            for (let i = 0, wordIndex = 0; i < maxNumOfLine && wordIndex < text.length; i++) {
                let curLine = "";
                while (wordIndex < text.length && getTextWidth(curLine + text[wordIndex], font) < maxWidth) {
                    curLine += text[wordIndex++] + ' ';
                }

                if (wordIndex === text.length) {
                    allTextContained = true;
                }
                if (i === maxNumOfLine-1) {
                    cutOffLine = curLine;
                } else {
                    replacingContent += curLine;
                }
            }

            if (!allTextContained) {
                cutOffLine = cutOffLine.substring(0, cutOffLine.length-4) + "...";
            }

            replacingContent += cutOffLine;
            renderingMap[replacingContent] = reviewContent;
        }
        function getTextWidth(text, font) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = font;
            const metrics = context.measureText(text);
            return metrics.width;
        }
    });

    Object.keys(renderingMap).forEach(replacingContent => {
        renderingMap[replacingContent].innerText = replacingContent;
    });
}