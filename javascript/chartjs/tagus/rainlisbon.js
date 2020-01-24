window.addEventListener('load', (event) => {

    var ctx = document.getElementById('rainlisbon');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
            datasets: [{
                type: "bar",
                label: "Gemiddelde dagen neerslag per maand Lissabon",
                backgroundColor: 'rgb(217,79,151,0.3)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '2',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [10, 10, 6, 9, 6, 2, 1, 1, 3, 8, 9, 11]
            }, {
                type: "bar",
                label: "Gemiddelde dagen neerslag per maand Amsterdam",
                backgroundColor: 'rgb(5,82,159,0.3)',
                borderColor: 'rgb(5,82,159)',
                borderWidth: '1',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [19, 12, 15, 13, 14, 13, 14, 14, 16, 17, 18, 19]
            }, {
                type: "line",
                label: 'Gemiddelde neerslag Lissabon',
                backgroundColor: 'rgb(217,82,159)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '5.5',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [95, 90, 50, 65, 55, 15, 5, 5, 30, 80, 105, 120]
            }, {
                type: "line",
                label: 'Gemiddelde neerslag Amsterdam',
                backgroundColor: 'rgb(5,82,159)',
                borderColor: 'rgb(5,82,159)',
                borderWidth: '4',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [66.6, 50.9, 60.6, 40.9, 55.6, 66.0, 76.5, 85.9, 82.4, 89.6, 87.2, 76.3]
            }],
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            animation: {
                easing: 'linear',
                duration: 1200
            },
            scales: {
                yAxes: [{
                    id: 'Y-axis-1',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }, {
                    id: 'Y-axis-2',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                },
                legend: {
                    display: true
                },
            },
        }
    });

});