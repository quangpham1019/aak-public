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
const googleReviewData = [
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
const yelpReviewData = [
    {
        "authorName": "Luis D.",
        "time": "Jan 2, 2025",
        "rating": 5,
        "text": "Amazing pho and shrimp spring rolls!!!!The service is great and dessert is good with great boba!!!!",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_120x120_v2@2x.yji-48e1eaa758eb78c47d5c.png",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=4_hCb0lM86cYn_O7zjCivw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        "authorName": "Rob V.",
        "time": "Dec 20, 2024",
        "rating": 5,
        "text": "Best Pho around! Good service, nice clean place and everything we tried was awesome! Will definitely be back often.",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/photo/ZjqKu1PgZl-cV_c_3HHr4w/ls.jpg",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=sFb7IWAlMtCv-9JcuQ6wAA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    },
    {
        "authorName": "Cindy W.",
        "time": "Dec 20, 2024",
        "rating": 5,
        "text": "Delicious food and clean restaurant. Will come back! We ordered the grill ribs pho twice in a row. The pho comes with an egg on top too . I had the filet mignon with baguette.",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_120x120_v2@2x.yji-48e1eaa758eb78c47d5c.png",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=GTB_9iBgX9_yqVABePx78Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    },
    {
        "authorName": "Vanessa V.",
        "time": "Dec 6, 2024",
        "rating": 4,
        "text": "Very friendly staff and the food was tasty! Best dishes were the shaken fries and popcorn chicken ! We will be back :)",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/photo/eJrloLKXBxBiOZfG4I2Rrw/ls.jpg",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=_8AyojZE5RVp9Ml7K3i6cw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    },
    {
        "authorName": "Jay K.",
        "time": "Nov 28, 2024",
        "rating": 5,
        "text": "Best Vietnamese restaurant in OC! Must try them. Very clean food and great service all the time. Price is reasonable and high quality food.\n" +
            "We recently did catering for 16 people for a small party. Everyone loved the food. Portion was very generous and pricing was very reasonable. Highly recommended!",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/photo/Aw6n0T5X43HZdfxwG2DAcg/ls.jpg",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=B_i71TejoYocTWGoffZc1Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    },
    {
        "authorName": "Alondra R.",
        "time": "Nov 16, 2024",
        "rating": 5,
        "text": "The beef back rib pho is AMAZING! My bf & I love it! Always so tender, and flavorful. Service is also great!!",
        "profileImgUrl": "https://s3-media0.fl.yelpcdn.com/photo/eOXxNTevfNI8zJ09Kj_hjg/ls.jpg",
        "sourcePlatform": SOURCE_PLATFORM.YELP,
        "reviewUrl": "https://www.yelp.com/biz/alo-asian-kitchen-laguna-niguel?hrid=ihXU_5_Szo8u1uqg-zlUgA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    }
];
export default function getReviews() {
    return [googleReviewData, yelpReviewData];
}