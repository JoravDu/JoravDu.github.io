window.addEventListener('load', (event) => {

    var ctx = document.getElementById('sun');
    var chart = new Chart(ctx, {
        type: 'bubble',
        data: {
            labels: "Zon",
            datasets: [
                {
                    label: ["Lissabon"],
                    backgroundColor: "rgba(166,206,227,1)",
                    borderColor: "rgba(166,206,227,1)",
                    data: [{
                        x: 38.68,
                        y: 2799,
                        r: 30
                    }]
                }, {
                    label: ["Londen"],
                    backgroundColor: "rgba(31,120,180,1)",
                    borderColor: "rgba(31,120,180,1)",
                    data: [{
                        x: 51.52,
                        y: 1410,
                        r: 30
                    }]
                }, {
                    label: ["Amsterdam"],
                    backgroundColor: "rgba(178,223,138,0.2)",
                    borderColor: "rgba(178,223,138,1)",
                    data: [{
                        x: 52.36,
                        y: 1524,
                        r: 15
                    }]
                }, {
                    label: ["Maastricht"],
                    backgroundColor: "rgba(51,160,44,0.2)",
                    borderColor: "rgba(51,160,44,1)",
                    data: [{
                        x: 50.84,
                        y: 1703,
                        r: 15
                    }]
                }, {
                    label: ["Marseille"],
                    backgroundColor: "rgba(251,154,153,0.2)",
                    borderColor: "rgba(251,154,153,1)",
                    data: [{
                        x: 43.28,
                        y: 2858,
                        r: 15
                    }]
                }, {
                    label: ["Madrid"],
                    backgroundColor: "rgba(227,26,28,0.2)",
                    borderColor: "rgba(227,26,28,1)",
                    data: [{
                        x: 40.43,
                        y: 2769,
                        r: 15
                    }]
                }, {
                    label: ["Barcelona"],
                    backgroundColor: "rgba(253,191,111,0.2)",
                    borderColor: "rgba(253,191,111,1)",
                    data: [{
                        x: 41.39,
                        y: 2524,
                        r: 15
                    }]
                }, {
                    label: ["Brussel"],
                    backgroundColor: "rgba(255,127,0,0.2)",
                    borderColor: "rgba(255,127,0,1)",
                    data: [{
                        x: 50.85,
                        y: 1546,
                        r: 15
                    }]
                }, {
                    label: ["Athene"],
                    backgroundColor: "rgba(202,178,214,0.2)",
                    borderColor: "rgba(202,178,214,1)",
                    data: [{
                        x: 37.99,
                        y: 2771,
                        r: 15
                    }]
                }, {
                    label: ["Dublin"],
                    backgroundColor: "rgba(106,61,154,0.2)",
                    borderColor: "rgba(106,61,154,1)",
                    data: [{
                        x: 53.32,
                        y: 1424,
                        r: 15
                    }]
                }, {
                    label: ["Hamburg"],
                    backgroundColor: "rgba(255,255,153,0.5)",
                    borderColor: "rgba(255,255,153,1)",
                    data: [{
                        x: 53.55,
                        y: 1557,
                        r: 15
                    }]
                }, {
                    label: ["Birmingham"],
                    backgroundColor: "rgba(177,89,40,0.2)",
                    borderColor: "rgba(177,89,40,1)",
                    data: [{
                        x: 52.47,
                        y: 1364,
                        r: 15
                    }]
                },
            ]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        city = data.datasets[tooltipItem.datasetIndex].label[0];
                        return city + ': noorderbreedte van deze plaats is ' + tooltipItem.xLabel + ' met het aantal zonuren: ' + tooltipItem.yLabel;
                    }
                }
            },
            title: {
                display: true,
                text: 'Zonuren en ligging op de aarde'
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Zonuren",
                        position: 'left'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "NB",
                        position: 'right'
                    }
                }]
            }
        }
    });

});