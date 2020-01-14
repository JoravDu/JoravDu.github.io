window.addEventListener('load', (event) => {

    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    var map = L.map('riverbasin', {
        center: [40.6044081, -5.6324803],
        zoom: 7,
        layers: [Stamen_Toner]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();


    var baseMaps = {
        "Wereldkaart": Stamen_Toner
    };

    L.control.layers(baseMaps).addTo(map);

    // Layers

    var tejobasin = L.geoJson(tejoBasin, {
        style: function(feature) {
            return {
                fillColor: '#43429C',
                weight: 0.5,
                fillOpacity: 0.5
            }
        }
    }).addTo(map);

    var tagusline = L.geoJson(tagusLine, {
        style: function(feature) {
            return {
                weight: 3,
                color: '#dc4e9b'
            }
        }
    }).addTo(map);

    // Legend
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += "<h4>Stroomgebied</h4>";
        div.innerHTML += '<i style="background: #43429C"></i><span>Stroomgebied Taag</span><br>';
        div.innerHTML += '<i style="background: #dc4e9b"></i><span>Rivier</span><br>';

        return div;
    };

    legend.addTo(map);

});