window.addEventListener('load', (event) => {
    // basemaps
    var Stamen_Tiles = L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"),
        mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox/satellite-v9',
            accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
    });

    var map = L.map('london', {
        center: [51.464130, 0.366754],
        zoom: 9,
        layers: [Stamen_Tiles]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();

    var baseMaps = {
        "Wereldkaart": Stamen_Tiles,
        "Satelliet" : mapboxSatellite
    };

    // Layers

    var thamesriver = L.geoJson(thamesRiver, {
        style: function (feature) {
            return {
                color: '#43429C',
                weight: 0.5,
                fillOpacity: 1,
            }
        }
    }).addTo(map).bringToFront();

    function getColor(d) {
        return d > 2005 ? '#a006837' :
            d > 1996 ? '#1a9850' :
                d > 1989 ? '#66bd63' :
                    d > 1979 ? '#a6d96a' :
                        d > 1970 ? '#d9ef8b' :
                            d > 1960 ? '#ffffbf' :
                                d > 1950 ? '#fee08b' :
                                    d > 1934 ? '#fdae61' :
                                        d > 1924 ? '#f46d43' :
                                            d > 1910 ? '#d73027' :
                                                '#a50026';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.period_build),
            weight: 0.5,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.5
        };
    }

    var londonyear = L.geoJson(londonYear, {
        style: style
    }).addTo(map).bringToBack();


    var overlayLayers = {
        "Theems rivier": thamesriver,
        "Leeftijd gebouwen in Londen": londonyear
    }

    L.control.layers(baseMaps).addTo(map);

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

    geojson = L.geoJson(londonYear, {
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
            '<b>' + props.NAME + '</b><br />' + props.build_period
            : 'Ga met muis over gebied');
    };

    info.addTo(map);

    // Legend
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #43429C"></i><span>Theems rivier</span><br><br>';

        var grades = ['>1900', 1918, 1929, 1939, 1954, 1964, 1972, 1982, 1992, 2000];

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