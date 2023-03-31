
$.fn.searchData = async function () {
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";

    var settings = {
        'cache': false,
        "async": true,
        "crossDomain": true,
        
        responseType: 'application/json',
        xhrFields: {
            withCredentials: false
        },
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json',
        },

        url,
        "method": "GET",
    }

    $.ajax(settings).done(function (response) {
        console.log(222, response);

    }).fail(function (response) {
        console.log(3333, response);

    });
}