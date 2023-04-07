function carregarMapa() {
  obterLocalizacao();
  console.log(9999, "dale");
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
  var markerSize = { sm: [28, 35], md: [35, 44], lg: [42, 53] };
  var markerAnchor = { sm: [14, 35], md: [17, 44], lg: [21, 53] };
  var markerPopupAnchor = { sm: [1, -35], md: [1, -44], lg: [2, -53] };

  var url =
    "https://www.mapquestapi.com/staticmap/v5/map?key=kGfI7mKWhWfLAC1fzS8djXwadtyGjqgt&center=" +
    latitude +
    "," +
    longitude +
    "&size=850,400@2x";

  var mediumMarker = L.icon({
    iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-md.png",
    iconRetinaUrl: "https://assets.mapquestapi.com/icon/v2/marker-md@2x.png",
    iconSize: markerSize.md,
    iconAnchor: markerAnchor.md,
    popupAnchor: markerPopupAnchor.md,
  });

  var image = document.createElement("img");
  image.src = url;

  document.getElementById("Mapa").appendChild(image);
}
