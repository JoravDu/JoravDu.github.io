window.addEventListener('load', (event) => {

    // basemaps
    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    var map = L.map('lisbon', {
        center: [38.7400538, -9.1493175],
        zoom: 12,
        layers: [Stamen_Toner]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();


    var baseMaps = {
        "Wereldkaart": Stamen_Toner
    };

    L.control.layers(baseMaps).addTo(map);

    // Layers
    var tejoestuary = L.geoJson(tejoEstuary, {
        style: function (feature) {
            return {
                fillColor: '#43429C',
                weight: 0.5,
                fillOpacity: 0.5
            }
        }
    }).addTo(map).bindPopup('<h1>Taag estuarium');

    function getColor(d) {
        return d > 1950 ? '#ffffb2' :
            d > 1700 ? '#fed976' :
                d > 1500 ? '#feb24c' :
                    d > 1400 ? '#fd8d3c' :
                        d > 1300 ? '#f03b20' :
                            '#bd0026';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.year_build),
            weight: 0.5,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.5
        };
    }

    var lisbonyear = L.geoJson(lisbonYear, {
        style: style
    }).addTo(map).bringToBack();

    // highlight
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#dc4e9b',
            dashArray: '',
            fillOpacity: 0.3
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
            info.update(layer.feature.properties);
        }
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    geojson = L.geoJson(lisbonYear, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    // Info control
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>Bouwjaren</h4>' + (props ?
            '<b>' + props.NAME_3 + '</b><br />' + props.build_period
            : 'Ga met muis over gebied');
    };

    info.addTo(map);

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #43429C"></i><span>Taag estuarium</span><br>';
        div.innerHTML += "<h4>Bouwjaren</h4>";

        var grades = [1399,1499,1599,1949,2000];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);

});