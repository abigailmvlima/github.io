
$.fn.searchData = async function () {
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    $.ajax({
        url,
        type: "GET",
        crossDomain: false,
        dataType: 'json',
        headers: {            
            "Host": "api.content.tripadvisor.com",
            "Accept": '*',
            'Access-Control-Allow-Origin': '*'
        },
        success: function (data) {
            console.log("Resposta do servidor: ", data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(111, jqXHR, textStatus, errorThrown);
        }
    });
}