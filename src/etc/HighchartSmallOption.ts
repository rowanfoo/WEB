import {Injectable} from "@angular/core";

@Injectable()
export class HighchartSmallOption {

  createOption(seriesOption, title) {
    return {
      title: {
        text: title
      },
      stockTools:
        {
          gui:
            {
              enabled: false
            }
        },
      xAxis:
        [{
          labels:
            {
              enabled: false
            }
        }],
      yAxis:
        [{
          labels:
            {
              enabled: false
            }
        }],

      navigator: {
        enabled: false
      },
      rangeSelector: {
        enabled: 'false'
      },
      scrollbar: {
        enabled: false
      },

      series: [
        {
          type: "line",
          id: "base",
          data: seriesOption
        },
      ]
    };
  }
}
