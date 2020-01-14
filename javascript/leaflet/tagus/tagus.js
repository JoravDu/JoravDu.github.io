window.addEventListener('load', (event) => {

    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    var map = L.map('tagus', {
        center: [38.7888169, -8.8160449],
        zoom: 10,
        layers: [Stamen_Toner]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();


    var baseMaps = {
        "Wereldkaart": Stamen_Toner
    };

    L.control.layers(baseMaps).addTo(map);

    // Layers

    var rivertagus = L.geoJson(riverTagus, {
        style: function (feature) {
            return {
                color: '#dc4e9b',
                fillColor: '#dc4e9b',
                weight: 0.5,
                fillOpacity: 1
            }
        }
    }).addTo(map).bindPopup('<h2>Rivier de Taag');

    var tejoestuary = L.geoJson(tejoEstuary, {
        style: function (feature) {
            return {
                color: '#43429C',
                fillColor: '#43429C',
                weight: 0.5,
                fillOpacity: 1
            }
        }
    }).addTo(map).bindPopup('<h2>Taag estuarium');

    // Legend
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += "<h4>Rivier</h4>";
        div.innerHTML += '<i style="background: #dc4e9b"></i><span>Rivier</span><br>';
        div.innerHTML += "<h4>Estuarium</h4>";
        div.innerHTML += '<i style="background: #43429C"></i><span>Estuarium</span><br>';

        return div;
    };

    legend.addTo(map);

});