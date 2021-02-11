import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {HighChartOption} from "../../../etc/HighChartOption";
import * as Highcharts from 'highcharts';

import HC_stock from 'highcharts/modules/stock';
import HStockTools from 'highcharts/modules/stock-tools';
import HC_exporting from 'highcharts/modules/exporting';


import HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import HPriceIndicator from 'highcharts/modules/price-indicator';
import HFullScreen from 'highcharts/modules/full-screen';
import {ActivatedRoute} from "@angular/router";
import Canvg from "canvg";

HC_exporting(Highcharts);
HC_stock(Highcharts);
HStockTools(Highcharts);


HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);


@Component({
  selector: 'app-chartgui',
  templateUrl: './chartgui.component.html',
  styleUrls: ['./chartgui.component.css']
})
export class ChartguiComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  @ViewChild("canvas") canvas;
  context: CanvasRenderingContext2D;
  renderedCanvas;
  @ViewChild("container") container: ElementRef;
  chartOptions
  chart;
  chartCallback;

  //imgof
  @Input() code: string
  @Input() year: string

  mycode: string
  myyear: string

  constructor(private  core: CoreDataRepo, private highChartOption: HighChartOption, private  route: ActivatedRoute) {
    const self = this;
    this.chartCallback = chart => {
      // saving chart reference
      self.chart = chart;
    };
  }


  ngOnInit() {
//    let code = 'BHP.AX'
    console.log('------------------ChartStockComponent-----v1---' + this.code)

    if (this.code != null) {
      this.mycode = this.code
      this.myyear = this.year

    } else {
      this.mycode = this.route.snapshot.params['code']
      this.myyear = this.route.snapshot.params['year']
    }

    this.core.getDataChart(this.mycode, "2020-01-01").subscribe(value1 => {
      this.chartOptions = this.highChartOption.createOption(value1)
    })

  }


  updateChart(fn) {
    console.log('--------------updateChart------')
    var chart = this.chart;
    let svg = chart
      .getSVG({
        chart: {
          width: this.chart.chartWidth,
          height: this.chart.chartHeight
        }
      })
    //
    this.context = this.canvas.nativeElement.getContext("2d");
    this.renderedCanvas = Canvg.from(
      this.context,
      // '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>'
      svg
    );

    this.renderedCanvas.then((value) => {
      value.start()
      var img = this.canvas.nativeElement.toDataURL("image/png")
      // this.imgof = img
      // console.log(img)
      fn(img)
    });
    console.log('--------------updateChart---DONE---')
  }

  show() {
    this.chart.redraw();

  }
}

