document.addEventListener("DOMContentLoaded", function () {

  if (typeof L === "undefined") {
    console.error("Leaflet not loaded");
    return;
  }

  if (typeof coordinates === "undefined" || !coordinates.length) {
    console.error("Coordinates missing");
    return;
  }

  const map = L.map('map').setView(
    [coordinates[1], coordinates[0]],
    13
  );

  L.tileLayer(
    `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapToken}`,
    {
      tileSize: 512,
      zoomOffset: -1,
      attribution:
        '&copy; MapTiler &copy; OpenStreetMap contributors'
    }
  ).addTo(map);

  L.marker([coordinates[1], coordinates[0]])
    .addTo(map)
    .bindPopup(listingTitle)
    .openPopup();

});