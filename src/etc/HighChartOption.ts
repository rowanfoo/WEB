import {Injectable} from "@angular/core";

@Injectable()
export class HighChartOption {

  createOption(seriesOption) {

    return {
      yAxis: [
        {
          labels: {
            align: "left"
          },
          height: "80%",
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: "left"
          },
          top: "80%",
          height: "20%",
          offset: 0
        }
      ],
      tooltip: {
        shape: "square",
        headerShape: "callout",
        borderWidth: 0,
        shadow: false,
        positioner: function (width, height, point) {
          let chart = this.chart;
          let position;
          //console.log("chart:",chart);
          if (point.isHeader) {
            position = {
              x: Math.max(
                // Left side limit
                chart.plotLeft,
                Math.min(
                  point.plotX + chart.plotLeft - width / 2,
                  // Right side limit
                  chart.chartWidth - width - chart.marginRight
                )
              ),
              y: point.plotY
            };
          } else {
            position = {
              x: point.series.chart.plotLeft,
              y: point.series.yAxis.top - chart.plotTop
            };
          }

          return position;
        }
      },
      series: [
        {
          type: "ohlc",
          id: "aapl-ohlc",
          name: "AAPL Stock Price",
          data: seriesOption
        },
        // {
        //   type: "column",
        //   id: "aapl-volume",
        //   name: "AAPL Volume",
        //   data: this.volume,
        //   yAxis: 1
        // }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              rangeSelector: {
                inputEnabled: false
              }
            }
          }
        ]
      }
    };
  }

}
