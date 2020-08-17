/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
var date = new Date();

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


//function JSMultiChart(seriesOptions, datetime, name, title) {
function JSMultiChart(seriesOptions, name, title) {
  console.log('---------createChart-------' + seriesOptions.length);

  var date = new Date();
  // create the chart
  // chart = new  Highcharts.StockChart('container', {
  return new Highcharts.StockChart(name, {

      legend: {
        enabled: false
      },
      title: {
        text: title
      },
      // xAxis: {
      //   min: Date.UTC(date.getFullYear() - 1, 1, 1, 16, 00), //previous day  at 16.00
      //   max: new Date().getTime() //get actual time
      // },


      xAxis: {
        "type": "date",
        //   tickPositions: datetime
      },


      rangeSelector:
        {
          enabled: false
        }
      ,

      navigator: {
        enabled: false
      }
      ,

      tooltip: {
        split: true
      }
      ,

      yAxis: [{
        opposite: false,
        min: getMin(seriesOptions),
        max: getMax(seriesOptions)
      }

      ],


      series:
        [{
          type: 'ohlc',
          id: 'aapl',
          data: seriesOptions,

        },
          // {
          //   type: 'sma',
          //   name: 'sma100',
          //   linkedTo: 'aapl',
          //   dashStyle: 'dashdot',// can only be seen in firefox not opera
          //   color: 'pink',
          //   params: {
          //     period: 100
          //   }
          // },
          {
            type: 'sma',
            name: 'sma200',
            linkedTo: 'aapl',
            color: 'green',
            params: {
              period: 200
            }
          },
          {
            type: 'sma',
            name: 'sma50',
            linkedTo: 'aapl',
            dashStyle: 'shortdot',
            color: 'orange',
            params: {
              period: 50
            }
          }

        ]


    }
  )
    ;
}
