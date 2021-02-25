import {Component, OnInit, ViewChild} from '@angular/core';

//declare var JSTestChart: any
// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts';

import HC_stock from 'highcharts/modules/stock';
import HStockTools from 'highcharts/modules/stock-tools';
import HC_exporting from 'highcharts/modules/exporting';


import HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import HPriceIndicator from 'highcharts/modules/price-indicator';
import HFullScreen from 'highcharts/modules/full-screen';
import {CoreDataRepo} from "../../repo/repo/CoreDataRepo";
import {HighChartOption} from "../../etc/HighChartOption";
import Canvg from 'canvg'

HC_exporting(Highcharts);
HC_stock(Highcharts);
HStockTools(Highcharts);

// HDragPanes(Highcharts);
// HAnnotationsAdvanced(Highcharts);
// HPriceIndicator(Highcharts);
// HFullScreen(Highcharts);
//HC_stock(Highcharts);


HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
//export class PLAYComponent implements OnInit, AfterViewInit {
export class PLAYComponent implements OnInit {

  @ViewChild("canvas", {static: false}) canvas;
  context: CanvasRenderingContext2D;
  renderedCanvas;
  chart;
  chartCallback;
  Highcharts: typeof Highcharts = Highcharts;
  hc_export: typeof HC_exporting = HC_exporting;

  constructor(private  core: CoreDataRepo, private highChartOption: HighChartOption) {
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
      console.log('------------------PLEASE WORK--------')
      self.chart = chart;
    };
  }

//   @ViewChild("container") container: ElementRef;
//
//   chartid: string[] = []
//

  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };
// /  chartOptions: Highcharts.Options
  chartOptions
//
//   async ngAfterViewInit() {
//     // console.log('------------------ngAfterViewInit-ngAfterViewInit-------' + Highcharts.chart)
//     // console.log('------------------ngAfterViewInit-ngAfterViewInit-------' + HC_exporting)
//     // console.log('------------------ngAfterViewInit-ngAfterViewInit-------' + this.hc_export)
//     //
//     //Highcharts.chart.exportChart({type: "image/jpeg"});
//     // console.log('------------------ngAfterViewInit--------' + this.container)
//     // console.log('------------------ngAfterViewInit--------' + this.container[0])
//     // console.log('------------------ngAfterViewInit--------' + this.container.innerHTML)
//     //   let svg = document.getElementById('container').children[0].innerHTML;
//     //this.hc_export.exportChart(Highcharts)
//     console.log('-------------------------')
// //    let xxx = Highcharts as any
//     //console.log('-------------------------' + xxx.getSVG())
//     // this.context = this.canvas.nativeElement.getContext("2d");
//     // this.renderedCanvas = await Canvg.from(
//     //   this.context,
//     //   '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>'
//     // );
//     // console.log('-------------------------' + this.renderedCanvas)
//     // this.renderedCanvas.start();
//
//   }
//
//
  ngOnInit() {

    let code = 'BHP.AX'

    console.log('------------------ChartStockComponent-----v1---' + code)
    this.core.getDataChart(code, "2020-01-01").subscribe(value1 => {
//      JSTestChart(value1)
      //   JSTestChart(value1)
      //this.chartOptions.data = value1

      // this.chartOptions = {
      //   series: [{
      //     data: value1,
      //     type: 'line'
      //   }]
      //
      // }
      this.chartOptions = this.highChartOption.createOption(value1, true)
//      console.log('------------------ngAfterViewInit-ngAfterViewInit-------' + hc_export.exportData)
//       Highcharts.exportCharts([chart1, chart2]);
      // console.log('------------------ChartStockComponent-HIGHCHART-------' + Highcharts.chart)

//      (Highcharts as any).exportCharts(this.Highcharts);
//      (this.Highcharts as  any).exportCharts([Highcharts.charts[0], Highcharts.charts[1]])
//       let xxx = Highcharts as any
//       console.log('------------------ChartStockComponent-HIGHCHART-------' + xxx)

      //  xxx.chart.exportCharts([this.Highcharts])
      //var z = xxx.chart.exportChart({type: 'application/pdf'}, this.chartOptions)
//      console.log(z)

      // var z = Highcharts.chart('container', this.chartOptions);
      // console.log('----------')
      // console.log(z)

      // Highcharts.exportChart({
      //   type: "image/jpeg"
      // });
//      Highcharts.chart.exportCharts = function (charts, options) {
//       Highcharts.exportCharts(charts)
//       Highcharts.


    })
  }

  imgof

  updateChart() {
    console.log('--------------updateChart------')
    console.log(this.chart)
    var chart = this.chart;

    console.log('--------------updateChart------' + this.chart.chartWidth)
    console.log('--------------updateChart------' + this.chart.chartHeight)

    console.log(this.chart)

    let svg = chart
      .getSVG({
        chart: {
          width: this.chart.chartWidth,
          height: this.chart.chartHeight
        }
      })


//    var xx = chart.exportChart()
    // console.log('--------------updateChart------' + svg)
//    svg = "data:image/svg+xml," + svg;
    //  this.imgof = svg

    this.context = this.canvas.nativeElement.getContext("2d");
    this.renderedCanvas = Canvg.from(
      this.context,
      // '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>'
      svg
    );

    this.renderedCanvas.then((value) => {
      console.log('-------------------------' + value)
      console.log(value)
      //value.resize(1600)
      console.log(value.start())
      console.log()

      // console.log(this.canvas.nativeElement.toDataURL("image/png"))
      var img = this.canvas.nativeElement.toDataURL("image/png")
      this.imgof = img


      // console.log(jb)
      //    console.log(value.toDataURL("image/png"))
    })

    // var img = this.renderedCanvas.toDataURL("image/png");


  }

// @ViewChild(ChartguiComponent) child: ChartguiComponent;
// toshow = false
// mycode = 'BHP.AX'

// updateChart() {
//   console.log('--------------BUTTON CLIKC------')
//   console.log(this.child)
//   console.log('--------------')
//   // this.child.updateChart()(value => {
//   //   console.log('------1--------')
//   //   console.log(value)
//   //   console.log('----2----------')
//   // });
//   this.child.updateChart(this.saveimage);
//   console.log('--------------BUTTON DONE------')
//
// }

// private saveimage(data) {
//   console.log('--saveimage----1--------')
//   console.log(data)
//   console.log('-saveimage---2----------')
//
// }
//
// showChart() {
//   this.toshow = true
//   //  this.child.show()
// }
//
// ngOnInit() {
// }


}
