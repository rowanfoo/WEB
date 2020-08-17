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


function JSCreateChartMini(seriesOptions, name, title) {
  console.log('--------------am i mad-1-----max-' + getMaxVal(seriesOptions));
  console.log('--------------am i mad--1----min-' + getMinVal(seriesOptions));

  var date = new Date();
  new Highcharts.StockChart(name, {

    legend: {
      enabled: false
    },
    title: {
      text: title,
      style: {"color": "#333333", "fontSize": "10px"}
    },

    // xAxis: {
    //   min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
    //   max: new Date().getTime() //get actual time
    // },
    xAxis: {
      type: 'date',
      // tickInterval: 1
      tickInterval: 1
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
    }
    ]
  });
}


// /**
//  * Create the chart when all data is loaded
//  * @returns {undefined}
//  */
// var date = new Date();
//
// function getMax(dataset) {
//   var max = Math.max.apply(Math, dataset.map(function (o) {
//     return o[4];
//   }));
//   return max + (max * 0.3);
// }
//
// function getMin(dataset) {
//   var min = Math.min.apply(Math, dataset.map(function (o) {
//     return o[4];
//   }));
//   return min - (min * 0.3);
// }
//
//
// function JSCreateChartMini(seriesOptions, name, title) {
//   console.log('---------createChart-------' + seriesOptions.length);
//
//   var date = new Date();
//   // create the chart
//   // chart = new  Highcharts.StockChart('container', {
//   return new Highcharts.StockChart(name, {
//
//     legend: {
//       enabled: false
//     },
//     title: {
//       text: title
//     },
//     xAxis: {
//       min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
//       max: new Date().getTime() //get actual time
//     },
//
//     rangeSelector: {
//       enabled: false
//     },
//
//     navigator: {
//       enabled: false
//     },
//
//     tooltip: {
//       split: true
//     },
//
//     yAxis: [{
//       opposite: false,
//       min: getMin(seriesOptions),
//       max: getMax(seriesOptions)
//     }
//
//     ],
//
//
//     series: [{
//       type: 'ohlc',
//       id: 'aapl',
//       data: seriesOptions,
//
//     },
//       // {
//       //   type: 'sma',
//       //   name: 'sma100',
//       //   linkedTo: 'aapl',
//       //   dashStyle: 'dashdot',// can only be seen in firefox not opera
//       //   color: 'pink',
//       //   params: {
//       //     period: 100
//       //   }
//       // },
//       {
//         type: 'sma',
//         name: 'sma200',
//         linkedTo: 'aapl',
//         color: 'green',
//         params: {
//           period: 200
//         }
//       },
//       {
//         type: 'sma',
//         name: 'sma50',
//         linkedTo: 'aapl',
//         dashStyle: 'shortdot',
//         color: 'orange',
//         params: {
//           period: 50
//         }
//       }
//
//     ]
//
//
//   });
// }
//
