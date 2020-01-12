var map = L.map('oldmap', {
    crs: L.CRS.Simple,
    minZoom: 1,
    maxZoom: 2
});

map.touchZoom.disable();
map.scrollWheelZoom.disable();
map.removeControl(map.zoomControl);

var bounds = [[-26.5, -25], [1000, 1000]];
var image = L.imageOverlay('img/london1666.webp', bounds).addTo(map);

map.fitBounds(bounds);

var yx = L.latLng;

var xy = function (x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};



var marker = xy([660, 475]);

// var marker2 = xy([656, 483], {
//     iconUrl: 'javascript/leaflet/markers/themonumentlondon.svg',
//     iconSize: [28, 35],
//     iconAnchor: [22, 30],
//     popupAnchor: [-7.5, -30]
// });

L.marker(marker).addTo(map).bindPopup("<center><h1>Pudding Lane</h1>Ongeveer op deze plaats was de bakkerij</center>");
// L.marker(marker2).addTo(map).bindPopup("<center><h1>The monument</h1>Hier staat het huidige monument dat de Grote brand herdenkt</center>").openPopup();
map.setView([490, 665], 1);