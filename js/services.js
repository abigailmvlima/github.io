
$.fn.searchData = async function () {
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    const options = { 
        method: 'GET', 
        headers: { accept: 'application/json' },
        mode: 'no-cors', 
    };

    const response = await fetch(url, options)
    console.log(1213, response.json())
}