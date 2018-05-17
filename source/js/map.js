function initMap() {
  var uluru = {
    lat: 59.936107,
    lng: 30.321490
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var markerIcon = "img/icon-map-marker.svg";
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: markerIcon
  });
}
