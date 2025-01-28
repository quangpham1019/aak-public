import getData, { Review, SOURCE_PLATFORM } from "./data/reviewsData.js";

const [googleReviewData, yelpReviewData] = getData();
const RATING = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
}
const yelpIcon = "<i id=\"yelp-logo\" class=\"fa-brands fa-yelp\"></i>";
const yelpStarImage = "assets/img/red-star.svg";
const notCountYelpStarImage = "assets/img/grey-star.svg";

export default function initializeReviews() {
    let googleReviewCarousel = document.querySelector("#google-reviews-carousel");
    let yelpReviewCarousel = document.querySelector("#yelp-reviews-carousel");

    LayoutUtility.execute(googleReviewCarousel, googleReviewData);
    LayoutUtility.execute(yelpReviewCarousel, yelpReviewData);
}

class LayoutUtility {

    static _resultFragment;
    static _designingFragment;

    static execute(reviewCarousel, reviewDataList) {
        this._resultFragment = reviewCarousel;
        this._designingFragment = document.createDocumentFragment();

        reviewDataList.forEach(reviewData => {
            this.#traverseDataAndApplyLayoutDesign(reviewData);
        })

        this._resultFragment.appendChild(this._designingFragment);
    }

    static #traverseDataAndApplyLayoutDesign(reviewData) {

        // choose LAYOUT_DESIGN_1 for current menuCategory
        const layoutDesign = LayoutDesignFactory.getLayoutDesign(reviewData.sourcePlatform);
        layoutDesign._review = reviewData;

        let reviewElement = document.createElement("a");
        layoutDesign.applyDesign(reviewElement);

        // append FRAGMENT_SUB_1 as child to tree
        this._designingFragment.appendChild(reviewElement);
    }
}

class LayoutDesignFactory {
    static getLayoutDesign(sourcePlatform) {
        let layoutDesign;

        switch (sourcePlatform) {
            case SOURCE_PLATFORM.GOOGLE:
                layoutDesign = new GoogleReviewLayoutDesign();
                break;
            case SOURCE_PLATFORM.YELP:
                layoutDesign = new YelpReviewLayoutDesign();
                break;
            default:
                console.log("using default layout");
                layoutDesign = new GoogleReviewLayoutDesign();
                break;
        }

        return layoutDesign;
    }
}

class LayoutDesign {

    _review;
    _designResult;

    constructor(review) {
        if (this.constructor === LayoutDesign) {
            throw new Error("Abstract class can't be instantiated.");
        }
        this._review = review;
    }

    get review() {
        return this._review;
    }

    set review(review) {
        this._review = review;
    }

    get result() {
        return this._designResult;
    }

    set result(result) {
        this._designResult = result;
    }

    applyDesign() {
        throw new Error("Method must be implemented by child class.")
    }

    getDesignResult() {
        return this._designResult;
    }
}
class GoogleReviewLayoutDesign extends LayoutDesign {

    constructor(review) {
        super(review);
    }

    applyDesign(designingElement) {
        // <!--*********************
        //     .carousel-slide LAYOUT
        // **********************-->
        // <a href="<reviewUrl>"
        //    aria-label="logo with link to doordash website for order deliver for alo asian kitchen"
        //    target="_blank"
        //    rel="noopener noreferrer"
        //    id="carousel-slide1"
        //    tabindex="0"
        //    class="carousel-slide">
        //     <div class="review-heading">
        //         <div class="user-image-wrapper">
        //             <img src="https://lh3.googleusercontent.com/a-/ALV-UjW3uZq6ZrTOGjY3LZo11nJ6ZWCCFX1adXuh2bJBWIqqGpA6InIuhg=w60-h60-p-rp-mo-ba3-br100" alt="imagem de um usuário google" id = "user-image">
        //         </div>
        //         <div class="review-heading-box-text">
        //             <p id= "top-container-name"> Moisés José da Silva </p>
        //             <p id= "top-container-date"> 02-03-2005 </p>
        //         </div>
        //         <div class="source-platform-logo-wrapper">
        //             <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="google logo" id= "google-logo">
        //         </div>
        //     </div>
        //     <div class="rating-wrapper">
        //         <p id= "stars">★★★★★</p>
        //         <img src="https://cdn-icons-png.freepik.com/256/10629/10629607.png?semt=ais_hybrid" alt=" Verified badge" id="verification-badge">
        //     </div>
        //     <div class="review-content-wrapper">
        //         <p class="review-content">Muito Top! Mudou minha oficina!</p>
        //     </div>
        // </a>

        designingElement.classList.add("carousel-slide");
        designingElement.setAttribute("href", this.review.reviewUrl);
        designingElement.setAttribute("target", "_blank");
        designingElement.setAttribute("rel", "noopener noreferrer");
        designingElement.setAttribute("tabindex", "0");
        designingElement.setAttribute("aria-label", `link to review on ${this.review.sourcePlatform}`);

        let reviewHeading = document.createElement("div");
        reviewHeading.classList.add("review-heading");

        let userImageWrapper = document.createElement("div");
        userImageWrapper.classList.add("user-image-wrapper");
        let userImage = document.createElement("img");
        userImage.id = "user-image";
        userImage.setAttribute("src", this.review.profileImgUrl);
        userImage.setAttribute("alt", `profile picture of ${this.review.authorName} on ${this.review.sourcePlatform}`);
        userImageWrapper.appendChild(userImage);

        let reviewHeadingBoxText = document.createElement("div");
        reviewHeadingBoxText.classList.add("review-heading-box-text");
        let authorName = document.createElement("p");
        authorName.classList.add("author-name");
        authorName.innerText = this.review.authorName;
        let reviewDate = document.createElement("p");
        reviewDate.classList.add("review-date");
        reviewDate.innerText = this.review.time;
        reviewHeadingBoxText.replaceChildren(authorName, reviewDate);

        let googleLogoWrapper = document.createElement("div");
        googleLogoWrapper.classList.add("source-platform-logo-wrapper");
        let googleLogo = document.createElement("img");
        googleLogo.setAttribute("src", "https://img.icons8.com/?size=512&id=17949&format=png");
        googleLogo.setAttribute("alt", "google logo");
        googleLogo.id = "google-logo";
        googleLogoWrapper.appendChild(googleLogo);

        reviewHeading.replaceChildren(userImageWrapper, reviewHeadingBoxText, googleLogoWrapper);

        let ratingWrapper = document.createElement("div");
        ratingWrapper.classList.add("rating-wrapper");
        let stars = document.createElement("div");
        stars.classList.add("stars");
        stars.innerText = RATING[this.review.rating];
        ratingWrapper.appendChild(stars);

        let reviewContentWrapper = document.createElement("div");
        reviewContentWrapper.classList.add("review-content-wrapper");
        let reviewContent = document.createElement("p");
        reviewContent.classList.add("review-content");
        reviewContent.classList.add("block-with-text");
        reviewContent.innerText = this.review.text;
        reviewContentWrapper.appendChild(reviewContent);

        designingElement.replaceChildren(reviewHeading, ratingWrapper, reviewContentWrapper);
    }
}
class YelpReviewLayoutDesign extends LayoutDesign {

    constructor(review) {
        super(review);
    }

    applyDesign(designingElement) {
        // <!--*********************
        //     .carousel-slide LAYOUT
        // **********************-->
        // <a href="<reviewUrl>"
        //    aria-label=""
        //    target="_blank"
        //    rel="noopener noreferrer"
        //    id="carousel-slide1"
        //    tabindex="0"
        //    class="carousel-slide">
        //     <div class="review-heading">
        //         <div class="user-image-wrapper">
        //             <img src="https://lh3.googleusercontent.com/a-/ALV-UjW3uZq6ZrTOGjY3LZo11nJ6ZWCCFX1adXuh2bJBWIqqGpA6InIuhg=w60-h60-p-rp-mo-ba3-br100" alt="imagem de um usuário google" id = "user-image">
        //         </div>
        //         <div class="review-heading-box-text">
        //             <p class= "authour-name"> Moisés José da Silva </p>
        //             <p class= "review-date">02-03-2005</p>
        //         </div>
        //         <div class="<sourcePlatform>-logo-wrapper">
        //             <img src="" alt="<sourcePlatform> logo" id= "<sourcePlatform>-logo">
        //         </div>
        //     </div>
        //     <div class="rating-wrapper">
        //         <div class="stars">
        //             <img class="yelp-star" />
        //             <img class="yelp-star" />
        //             <img class="yelp-star" />
        //             <img class="yelp-star" />
        //             <img class="yelp-star" />
        //         </div>
        //     </div>
        //     <div class="review-content-wrapper">
        //         <p class="review-content">Muito Top! Mudou minha oficina!</p>
        //     </div>
        // </a>

        designingElement.classList.add("carousel-slide");
        designingElement.setAttribute("href", this.review.reviewUrl);
        designingElement.setAttribute("target", "_blank");
        designingElement.setAttribute("rel", "noopener noreferrer");
        designingElement.setAttribute("tabindex", "0");
        designingElement.setAttribute("aria-label", `link to review on ${this.review.sourcePlatform}`);

        let reviewHeading = document.createElement("div");
        reviewHeading.classList.add("review-heading");

        let userImageWrapper = document.createElement("div");
        userImageWrapper.classList.add("user-image-wrapper");
        let userImage = document.createElement("img");
        userImage.id = "user-image";
        userImage.setAttribute("src", this.review.profileImgUrl);
        userImage.setAttribute("alt", `profile picture of ${this.review.authorName} on ${this.review.sourcePlatform}`);
        userImageWrapper.appendChild(userImage);

        let reviewHeadingBoxText = document.createElement("div");
        reviewHeadingBoxText.classList.add("review-heading-box-text");
        let authorName = document.createElement("p");
        authorName.classList.add("author-name");
        authorName.innerText = this.review.authorName;
        let reviewDate = document.createElement("p");
        reviewDate.classList.add("review-date");
        reviewDate.innerText = this.review.time;
        reviewHeadingBoxText.replaceChildren(authorName, reviewDate);

        let sourcePlatformLogoWrapper = document.createElement("div");
        sourcePlatformLogoWrapper.classList.add("source-platform-logo-wrapper");
        // sourcePlatformLogo.setAttribute("src", "assets/img/yelp_logo_cmyk.png");
        // sourcePlatformLogo.setAttribute("alt", "yelp logo");
        // sourcePlatformLogo.id = "google-logo";
        sourcePlatformLogoWrapper.innerHTML = yelpIcon;

        reviewHeading.replaceChildren(userImageWrapper, reviewHeadingBoxText, sourcePlatformLogoWrapper);

        let ratingWrapper = document.createElement("div");
        ratingWrapper.classList.add("rating-wrapper");
        let stars = document.createElement("div");
        stars.classList.add("stars");
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("img");

            let starImage = i < this.review.rating ? yelpStarImage : notCountYelpStarImage;

            star.setAttribute("src", starImage);
            star.setAttribute("alt", "star rating image for yelp");

            star.classList.add("yelp-star");

            // if (i > this.review.rating-1) {
            //     star.classList.add("no-count");
            // }

            stars.appendChild(star);
        }
        ratingWrapper.appendChild(stars);

        let reviewContentWrapper = document.createElement("div");
        reviewContentWrapper.classList.add("review-content-wrapper");
        let reviewContent = document.createElement("p");
        reviewContent.classList.add("review-content");
        reviewContent.classList.add("block-with-text");
        reviewContent.innerText = this.review.text;
        reviewContentWrapper.appendChild(reviewContent);

        designingElement.replaceChildren(reviewHeading, ratingWrapper, reviewContentWrapper);
    }
}

