$.url_service = "https://1tmyyh9dpi.execute-api.us-east-1.amazonaws.com/devs";

$.fn.request = async function (url, data, method = "GET") {
  const address = `${url}${method == "GET" ? data || "" : ""}`;
  const response = await fetch(address, {
    method,
    headers: {
      "sec-fetch-mode": "no-cors",
    },
    ...(method == "POST" ? { body: JSON.stringify(data) } : {}),
  });

  if (!response.ok) {
    console.log("error", response, await response.json());
    return false;
  }

  return await response.json();
};

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
};

$.fn.loadListaCards = async function () {
  try {
    var html = "";
    var pesquisa =
      "?searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    var list = await $.fn.request(`${$.url_service}/search`, pesquisa, "GET");
    var data = list.data;

    // percorre os 3 primeiros registros
    for (let i = 0; i < data.length && i < 3; i++) {
      const registro = data[i];
      var photos = await $.fn.request(
        "search/photos",
        `?location_id=${registro.location_id}`
      );
      var reviews = await $.fn.request(
        "location/reviews",
        `?location_id=${registro.location_id}`
      );
      var texto = reviews.data[0].text.substring(0, 200);

      // cria o card para home
      html += $.fn.editCard({
        texto: `${texto}...`,
        imgRate: reviews.data[0].rating_image_url,
        description: registro.name,
        img: photos.data[0].images.original,
      });
    }

    $("#listaCards").html(html);
  } catch (error) {
    console.log(error);
  }
};

$.fn.novoCadastro = async function (data) {
  try {
    return await $.fn.request(
      "https://7rvtm6rvy5.execute-api.sa-east-1.amazonaws.com/default/traveller-lambda-dev-create",
      data,
      "POST"
    );
  } catch (error) {
    console.log("novoCadastro.erro", error);
  }
};

$.fn.login = async function (data) {
  try {
    return await $.fn.request("url de login", data, "POST");
  } catch (error) {
    console.log("login.erro", error);
  }
};

$.fn.validarVariavel = function (variavel) {
  if (
    typeof variavel === "undefined" ||
    variavel === null ||
    variavel.length === 0
  ) {
    return false; // A variável é nula ou indefinida
  } else {
    return true; // A variável tem um valor
  }
};
