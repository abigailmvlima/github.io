$.url_service = "https://1tmyyh9dpi.execute-api.us-east-1.amazonaws.com/dev";

$.fn.request = async function (uri, dataString) {
    const url = `${$.url_service}/${uri}${dataString}`;
    const response = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        crossorigin: true,
    })

    if (!response.ok) {
        console.error('error', response, await response.json())
        return;
    }

    return await response.json()
}


$.fn.editCard = function ({ texto, description, img, imgRate }) {
    return `
        <div class="box-hotel">
            <img src="${img.url}" alt="" />
            <div class="stars">
                <img src="${imgRate}" alt="" />
            </div>
            <div class="foto">
                <div>
                    <span>${description}</span>
                    <p>${texto}</p>
                </div>
            </div>
        </div>
    `;

}

$.fn.loadListaCards = async function () {
    try {
        var html = ''
        var pesquisa = '?searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br'
        var list = await $.fn.request('search', pesquisa)
        var data = list.data

        // percorre os 3 primeiros registros
        for (let i = 0; i < data.length && i < 3; i++) {
            const registro = data[i];
            var photos = await $.fn.request('search/photos', `?location_id=${registro.location_id}`)
            var reviews = await $.fn.request('location/reviews', `?location_id=${registro.location_id}`)
            var texto = reviews.data[0].text.substring(0, 200)

            // cria o card para home
            html += $.fn.editCard({
                texto: `${texto}...`,
                imgRate: reviews.data[0].rating_image_url,
                description: registro.name,
                img: photos.data[0].images.original,
            })
        }

        $('#listaCards').html(html)
    } catch (error) {
        console.error(error)
    }
}