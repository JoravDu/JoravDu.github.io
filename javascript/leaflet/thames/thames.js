window.addEventListener('load', (event) => {

    // basemaps
    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
    }),
    mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
    });


    var map = L.map('thames', {
        center: [51.464130, 0.366754],
        zoom: 9,
        layers: [Stamen_Toner]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();

    var baseMaps = {
        "Wereldkaart": Stamen_Toner,
        "Satelliet" : mapboxSatellite
    };

    // Layers

    var thamesriver = L.geoJson(thamesRiver, {
        style: function (feature) {
            return {
                color: '#43429C',
                weight: 3,
                fillOpacity: 0,
                opacity: 1,
            }
        }

    }).addTo(map);


    var estuaryoutline = L.geoJson(estuaryOutline, {
        style: function (feature) {
            return {
                "color": "#43429C",
                "weight": 3,
                "opacity": 1
            }
        }
    }).addTo(map);

    var estuaryMarker = L.icon({
        iconUrl: 'javascript/leaflet/markers/Marker-estuary.svg',
        iconSize: [28, 35],
        iconAnchor: [22, 30],
        popupAnchor: [-7.5, -30]
    });

    var thamesriverImg = '<center><h1>Rivier de Theems <br><br> <img src = " https://live.staticflickr.com/695/21834622831_d0562e309f_b.jpg"  width ="320px" height = "177px" />';
    var thamesestuaryImg = '<center><h1>Theems estuarium <br><br> <img src = "https://upload.wikimedia.org/wikipedia/commons/7/7b/The_Thames_Estuary_from_the_air_%28geograph_2357446%29.jpg"  width ="320px" height = "177px" />';

    thamesriver.bindPopup(thamesriverImg);
    estuaryoutline.bindPopup(thamesestuaryImg);

    popupEstuary = '<center><h2>Theems estuarium</h2></center>'

    L.marker([51.495472, 0.720833], { icon: estuaryMarker }).addTo(map).bindPopup(popupEstuary);

    L.control.layers(baseMaps).addTo(map);

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #43429C"></i><span>Theems rivier en estuarium</span><br>';

        return div;
    };

    legend.addTo(map);

});

mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
})