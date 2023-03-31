
$.fn.searchData = async function () {
    const xhr = new XMLHttpRequest();
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log("Resposta do servidor: ", data);
        } else {
            console.error("Erro na solicitação: ", this.statusText);
        }
    };

    xhr.onerror = function () {
        console.error("Erro na solicitação.");
    };

    xhr.send();
}