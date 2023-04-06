function carregarMapa() {
  obterLocalizacao();
}

function obterLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(obterPosicao);
  } else {
    alert("Não foi possível obter a localização");
  }
}

function obterPosicao(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  mapa(latitude, longitude);
}

function mapa(latitude, longitude) {
  var url =
    "https://www.mapquestapi.com/staticmap/v5/map?key=kGfI7mKWhWfLAC1fzS8djXwadtyGjqgt&center=" +
    latitude +
    "," +
    longitude +
    "&size=600,400@2x";

  var image = document.createElement("img");
  image.src = url;

  document.getElementById("Mapa").appendChild(image);
}
