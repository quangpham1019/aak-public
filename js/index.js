import initializeNavbar from "./initializeNavbar.js";
import { initializeMenuItems } from "./initializeMenuItems.js";
import initializeReviewsCarousels from "./initializeReviewsCarousels.js";
import {MenuCategory} from "./model/menuModels.js";

$(document).ready(function() {

    initializeNavbar();
    initializeMenuItems();
    initializeReviewsCarousels();


    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    $.ajax({
        type: 'GET',
        url: 'https://localhost:7049/Edu/sample'
    }).done(function(data) {
       console.log(data);
    });
    let requestData;
    // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJhTDDHRvv3IARgKPoNqDhdJM&key=AIzaSyDhgPE-JwRSA--dLYfE29_QTySu8p6MUiQ

    let placeId = 'ChIJhTDDHRvv3IARgKPoNqDhdJM';
    // fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJhTDDHRvv3IARgKPoNqDhdJM&key=AIzaSyDhgPE-JwRSA--dLYfE29_QTySu8p6MUiQ")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // getPlaceReviews(placeId);
    //
    // $.ajax({
    //     type: 'GET',
    //     url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJhTDDHRvv3IARgKPoNqDhdJM&key=AIzaSyDhgPE-JwRSA--dLYfE29_QTySu8p6MUiQ`,
    //     // data: requestData
    //
    // }).done(function (data) {
    //     // console.log(fragment);
    //     // console.log(`#${table}Table`);
    //     // $(`#${table}Table`).find("table").replaceWith(fragment);
    //     console.log(data);
    // });
});

function getPlaceReviews(placeId) {

    const request = new google.maps.places.PlaceDetailsRequest({

        placeId: placeId,

        fields: ['name', 'reviews']

    });

    const service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {

        if (status === 'OK') {

            const reviews = place.reviews; // Array of review objects

            // Process and display reviews
            console.log(reviews);
        } else {

            console.error('Place details request failed');

        }

    });

}