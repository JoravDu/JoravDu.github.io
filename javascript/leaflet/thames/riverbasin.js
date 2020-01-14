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


    var map = L.map('riverbasin', {
        center: [51.464130, 0.366754],
        zoom: 9,
        layers: [Stamen_Toner]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();

    var baseMaps = {
        "Wereldkaart": Stamen_Toner,
        "Satelliet": mapboxSatellite
    };

    // Layers

    var wmsLayer = L.tileLayer.wms('https://environment.data.gov.uk/spatialdata/wfd-river-basin-districts-cycle-2/wms', {
        layers: 'WFD_River_Basin_Districts_Cycle_2',
        transparent: false,
        opacity: 0.5,
    }).addTo(map);

    var thamesriver = L.geoJson(thamesRiver, {
        style: function (feature) {
            return {
                color: '#43429C',
                weight: 2,
                fillOpacity: 0,
                opacity: 1,
            }
        }
    }).addTo(map);

    var thamesline = L.geoJson(thamesLine, {
        style: function (feature) {
            return {
                color: '#DC4E9B',
                weight: 3,
                opacity: 1
            }
        }
    }).addTo(map).bindPopup("<h2>De Theems");

    var overlayLayers = {
        "Stroomgebieden V.K.": wmsLayer,
    }

    L.control.layers(baseMaps, overlayLayers).addTo(map);

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #DC4E9B"></i><span>Theems rivier</span><br>';
        div.innerHTML += '<i style="background: #43429C"></i><span>Theems uitlijn</span><br>';
        div.innerHTML += '<i style="background: rgba(203, 199, 201, 0.6)"></i><span>Stroomgebieden Verenigd Koninkrijk</span><br>';

        return div;
    };

    legend.addTo(map);
});