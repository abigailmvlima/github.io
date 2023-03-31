
$.fn.searchData = async function () {
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    const options = {
        method: 'GET',
        mode: 'no-cors',
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.log(4444, response)
            throw new Error('Erro na solicitação.');
        }
        const data = await response.json();
        console.log('Resposta do servidor: ', data);
    } catch (error) {
        console.error('Erro na solicitação: ', error);
    }
}