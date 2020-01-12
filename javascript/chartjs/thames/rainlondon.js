window.addEventListener('load', (event) => {

    var ctx = document.getElementById('rainlondon');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
            datasets: [{
                type: "bar",
                label: "Gemiddelde dagen neerslag per maand Londen",
                backgroundColor: 'rgb(217,79,151,0.3)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '2',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [11.1, 8.5, 9.3, 9.1, 8.8, 8.2, 7.7, 7.5, 8.1, 10.8, 10.7, 10.2]
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
                label: 'Gemiddelde neerslag Londen',
                backgroundColor: 'rgb(217,82,159)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '5.5',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [55.2, 40.9, 41.6, 43.7, 49.4, 45.1, 44.5, 49.5, 49.1, 68.5, 59, 55.2]
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
            responsive: true,
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