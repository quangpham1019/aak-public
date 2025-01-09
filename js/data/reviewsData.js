const StarRating = {
    STAR_RATING_UNSPECIFIED: 0,
    ONE	: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5
};
const SOURCE_PLATFORM = {
    GOOGLE: "google",
    YELP: "yelp"
}

const reviewsData = {
    'google': {
        "reviews": [
            {
                "name": 'string',
                "reviewId": 'string',
                "reviewer": {
                    "profilePhotoUrl": 'string',
                    "displayName": 'string',
                    "isAnonymous": true // true/false
                },
                "starRating": StarRating.STAR_RATING_UNSPECIFIED,
                "comment": 'string',
                "createTime": 'string',
                "updateTime": 'string',
                "reviewReply": {
                    "comment": 'string',
                    "updateTime": 'string'
                }
            }
        ],
        "averageRating": 0.0,
        "totalReviewCount": 0,
        "nextPageToken": 'string'
    }
}
const reviewsData2 = [
    {
        "authorName": "Ethan",
        "time": "",
        "rating": 5,
        "text": "Best Asian food in town. Highly recommended.",
        "profileImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocL4YCCBbw8EXjxvOfk9Pt0e0vNsXvjj4k2i0kbL1pZve_3zKA=w108-h108-p-rp-mo-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/GFwbxbApvLvGsGmz5"
    },
    {
        "authorName": "Soro Wellness",
        "time": "",
        "rating": 4,
        "text": "At first the place looks unassuming - but the food was great! We got the banh mi with beef and the shrimp pho. The banh mi was great highly rec and the pho was very flavorful.\n" +
            "We will be back!",
        "profileImgUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWCSOYzpoP227wIm6bLNQ0s-Tp9vnsSAQQsi6nI1EMi47oOq30=w108-h108-p-rp-mo-ba4-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/kA9tCzMTm1iREQG3A",
    },
    {
        "authorName": "Maria Barrezueta",
        "time": "",
        "rating": 5,
        "text": "I had the filet mignon dish and everything was amazing and flavorful. Sorry no pics cause I didn’t think to rate it but it was so good I had to share my experience. 10 out of 10 👌🏽👌🏽👌🏽",
        "profileImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocKa5eWTAByxo6i6O7G-HGl7ZC0OmkyY4USYvhrF_c8fW4Kq9A=w108-h108-p-rp-mo-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/BQtKL19Uz3NKLTjGA",
    },
    {
        "authorName": "Sheree Warner",
        "time": "",
        "rating": 5,
        "text": "Love this place. Food is delicious, and service is always awesome.",
        "profileImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ09i6pI5ONUyBcpWPSNsnJSMagxM8tHS0n14Zt3eWvFf527A=w108-h108-p-rp-mo-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/DQzuCU7V7CAfiibU7",
    },
    {
        "authorName": "Corina Lange",
        "time": "",
        "rating": 4,
        "text": "This place came in clutch for being open on the holidays when most other places in the area were closed. After getting what felt like a child’s meal for dinner at a restaurant in Irvine and then trying to go to a couple other places on the way home for a snack only to discover they had closed early, my partner luckily remembered this place and suggested checking if it were open. Fortunately, it was, and although I ordered in person, the food was ready for takeout within a few minutes. I got the grilled tofu and rice combo, and it was great. Nothing fancy, but it  was well-seasoned and tasted like a home-cooked meal, which is exactly what I wanted.",
        "profileImgUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV6e-1-9sQF3-YZbBc2Yi6yUIGE06a1lsS3fA_HhE1hAinuw4nROQ=w108-h108-p-rp-mo-ba5-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/KcpAj7cN4xd2Qu1t5",
    },
    {
        "authorName": "Jay Kim",
        "time": "",
        "rating": 5,
        "text": "We love their food. We’ve been to all pho places around Laguna Niguel and surrounding area and by far Alo Asian has cleanest, fresh and tasty Vietnamese food.  Staffs are always friendly amd welcoming and always has great attitude.   Highly recommended.",
        "profileImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocKqfAEr1iAceEqhdskZ4BiOW_q61_hzEBZaswHlln1uViMznlo=w108-h108-p-rp-mo-br100",
        "sourcePlatform": SOURCE_PLATFORM.GOOGLE,
        "reviewUrl": "https://maps.app.goo.gl/eJnGNByzoT7SQhYT6",
    }
];
export default function getReviews() {
    return reviewsData2;
}