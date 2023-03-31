
$.fn.searchData = function () {
    const url = "https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/search?searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    fetch(url, {
        method: 'GET',
        withCredentials: true,
        crossorigin: true,
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}