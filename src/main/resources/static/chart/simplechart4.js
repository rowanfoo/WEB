angular
    .module('app')
    .factory('HIGHCHARTSIMPLE', Service);

function Service($http) {
    var service = {};
    service.CreateChart = createChart;

    return service;

    var date = new Date();


    /**
     * Create the chart when all data is loaded
     * @returns {undefined}
     */
    function createChart(myseries, name) {
        console.log('-----------------HIGHCHARTSIMPLE------------------------');
        var date = new Date();
        // create the chart
        // chart = new  Highcharts.StockChart('container', {
        return new Highcharts.StockChart(name, {

            // legend: {
            //     enabled: false
            // },
            // chart: {
            //     type: 'line'
            // },

            // title: {
            //     text: 'AAPL Stock Price'
            // },
            // xAxis: {
            //     min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
            //     max: new Date().getTime() //get actual time
            // },

            // rangeSelector: {
            //     enabled: false
            // },

            // navigator: {
            //     enabled: false
            // },
            //
            // tooltip: {
            //     split: true
            // },

            // yAxis: [{
            //
            //     // title: {
            //     //     text: 'OHLC'
            //     // },
            //     // top: 50,
            //     // height: 400,
            //     opposite: false,
            //     min: getMin(seriesOptions),
            //     max: getMax(seriesOptions)
            //     // min: 20,
            //     // max: 50
            // }
            //
            // ],

            plotOptions: {
                series: {
                    dataGrouping: {
                        forced: true,
                        units: [
                            ['day', [1]]
                        ]
                    }
                }
            },

            series: myseries
            // series: [{
            //     id: 'aapl',
            //     data: seriesOptions
            // },
            //     {
            //         type: 'sma',
            //         name: 'sma50',
            //         linkedTo: 'aapl',
            //         dashStyle: 'shortdot',
            //         color: 'orange',
            //         params: {
            //             period: 100
            //         }
            //     }
            //
            // ]
        });
    }


// function createChart(seriesOptions, name) {
//     var date = new Date();
//     // create the chart
//     // chart = new  Highcharts.StockChart('container', {
//     return new Highcharts.StockChart(name, {
//
//         legend: {
//             enabled: false
//         },
//         // title: {
//         //     text: 'AAPL Stock Price'
//         // },
//         xAxis: {
//             min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
//             max: new Date().getTime() //get actual time
//         },
//
//         rangeSelector: {
//             enabled: false
//         },
//
//         navigator: {
//             enabled: false
//         },
//
//         tooltip: {
//             split: true
//         },
//
//         yAxis: [{
//
//             // title: {
//             //     text: 'OHLC'
//             // },
//             // top: 50,
//             // height: 400,
//             opposite: false,
//             min: getMin(seriesOptions),
//             max: getMax(seriesOptions)
//             // min: 20,
//             // max: 50
//         }
//
//         ],
//
//
//         series: [{
//             type: 'ohlc',
//             id: 'aapl',
//             data: seriesOptions,
//
//             // dataGrouping: {
//             //     enabled: true,
//             //     units: [['month', [1]]]
//             //
//             // }
//
//         },
//
//
//         ]
//     });
// }


}