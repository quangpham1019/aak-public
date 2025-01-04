const StarRating = {
    STAR_RATING_UNSPECIFIED: 0,
    ONE	: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5
};

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

export default function getReviews() {
    return reviewsData;
}