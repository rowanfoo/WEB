angular
    .module('app')
    .factory('HIGHCHARTDATE', Service);

function Service($http, $localStorage) {
    var service = {};
    service.CreateChart = createChart;
    return service;
};

function getMax(dataset) {
    var max = Math.max.apply(Math, dataset.map(function (o) {
        return o[4];
    }));
    return max + (max * 0.3);
}

function getMin(dataset) {
    var min = Math.min.apply(Math, dataset.map(function (o) {
        return o[4];
    }));
    return min - (min * 0.3);
}


/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart(seriesOptions, name , date ) {
    var date = new Date();
    // create the chart
    // chart = new  Highcharts.StockChart('container', {
    new Highcharts.StockChart(name, {

        legend: {
            enabled: false
        },

        xAxis: {
            min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
            max: new Date().getTime() //get actual time
        },

        rangeSelector: {
            enabled: false
        },

        navigator: {
            enabled: false
        },

        tooltip: {
            split: true
        },

        yAxis: [{

            // title: {
            //     text: 'OHLC'
            // },
            // top: 50,
            // height: 400,
            opposite: false,
            min: getMin(seriesOptions),
            max: getMax(seriesOptions)
            // min: 20,
            // max: 50
        }

        ],


        series: [{
            type: 'ohlc',
            id: 'aapl',
            data: seriesOptions,

            // dataGrouping: {
            //     enabled: true,
            //     units: [['month', [1]]]
            //
            // }

        },
            {
                type: 'sma',
                name: 'sma50',
                linkedTo: 'aapl',

                params: {
                    period: 100
                }
            }


        ]
    });
}
