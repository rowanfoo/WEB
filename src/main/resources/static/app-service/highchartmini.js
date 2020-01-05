angular
    .module('app')
    .factory('HIGHCHARTMINI', Service);

function Service($http, $localStorage) {
    var service = {};
    service.CreateChart = createChartx;
    return service;
};

function getMaxVal(dataset) {
    var max = Math.max.apply(Math, dataset.map(function (o) {
        return o[4];
    }));
    console.log('--------------am i mad------max pure-' + max);
    return max + (max * 0.1);
}

function getMinVal(dataset) {
    var min = Math.min.apply(Math, dataset.map(function (o) {
        return o[4];
    }));
    return min - (min * 0.3);
}


/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChartx(seriesOptions, name) {

// function createChart(seriesOptions, name, date) {
    console.log('--------------am i mad-1-----max-' + getMaxVal(seriesOptions));
    console.log('--------------am i mad--1----min-' + getMinVal(seriesOptions));

    var date = new Date();
    // create the chart
    // chart = new  Highcharts.StockChart('container', {
    new Highcharts.StockChart(name, {

        legend: {
            enabled: false
        },
        title: {
            text: name,
            style: {"color": "#333333", "fontSize": "10px"}
        },

        xAxis: {
            min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
            max: new Date().getTime() //get actual time
        },
        scrollbar: {
            enabled: false
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

        // yAxis: [{
        //
        //     // title: {
        //     //     text: 'OHLC'
        //     // },
        //     // top: 50,
        //     // height: 400,
        //     // opposite: false,
        //     min: 0.1,
        //     max: 0.8
        //     // min: 20,
        //     // max: 50
        // }
        //
        // ],
        yAxis: {
            min: getMinVal(seriesOptions),
            //min: 0.2,
            max: getMaxVal(seriesOptions)
            // //max: 0.5
        },
        series: [{
            type: 'ohlc',
            id: 'aapl',
            data: seriesOptions,

            // dataGrouping: {
            //     enabled: true,
            //     units: [['month', [1]]]
            //
            // }

        }


        ]
    });
}
