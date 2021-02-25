import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {HighChartOption} from "../../../etc/HighChartOption";
import * as Highcharts from 'highcharts';
import {ActivatedRoute} from "@angular/router";
import {interval, Subscription} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentEditComponent} from "../../comment/comment-edit/comment-edit.component";

import HC_stock from 'highcharts/modules/stock';
import HStockTools from 'highcharts/modules/stock-tools';
import HC_exporting from 'highcharts/modules/exporting';


import HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import HPriceIndicator from 'highcharts/modules/price-indicator';
import HFullScreen from 'highcharts/modules/full-screen';


HC_exporting(Highcharts);
HC_stock(Highcharts);
HStockTools(Highcharts);


HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);


@Component({
  selector: 'app-chartx',
  templateUrl: './chartx.component.html',
  styleUrls: ['./chartx.component.css']
})


export class ChartxComponent implements OnInit, OnDestroy {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions
  chart;
  mycodes: string

  @Input() codes: string

  subscription: Subscription;
  showIntervalButton = false
  showContinueButton = false
  pauseinterval = false
  count = 1
  asxcodes: string[]

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  constructor(private  core: CoreDataRepo, private highChartOption: HighChartOption, private  route: ActivatedRoute, private dialog: MatDialog) {
  }


  ngOnInit() {

    //this is coming from Intervalchart.component or user can use <app [code]
    let code = this.route.snapshot.params['code'];
    console.log('------------------ChartComponentX----params----' + code)
    console.log('------------------ChartComponentX----data in ----' + this.codes)
    if (code == null) {
      code = this.codes
    }

    this.asxcodes = code.split(',')
    let timer = interval(20000)

    this.asxcodes.forEach(value => console.log('------------------IntetvalChartXX--------' + value))

    this.createChartX(this.asxcodes[0])
    if (code.length > 1) {
      this.showIntervalButton = true
      timer.subscribe(value => {
        console.log(value)

        if (!this.pauseinterval) {
          if (this.count < this.asxcodes.length) {
            let mycode = this.asxcodes[this.count++]
            this.createChartX(mycode)
            console.log('------------------ChartComponent----VAL----' + mycode)
          } else {
            this.mycodes = 'DONE'
          }
        }
      })
    }

  }


  private createChartX(code: string) {
    console.log('-----------CREATE CHARTXX------------' + code)
    this.mycodes = code
    this.core.getDataChart(code, "2020-01-01").subscribe(value1 => {
      this.chartOptions = this.highChartOption.createOption(value1, false)
    })
  }

  pause() {
    this.pauseinterval = true
    this.showContinueButton = true
  }

  continue() {
    this.pauseinterval = false
    this.createChartX(this.asxcodes[this.count++])
    this.showContinueButton = false
  }

  openstockadd() {
    console.log('-----------openstockadd------------------' + this.mycodes)
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "90%"
    a.height = "95%"
    a.data = {
      code: this.mycodes,
      dialog: this.dialog,
      period: 'SHORT',
    }
    this.dialog.open(CommentEditComponent, a)
    this.pause()
  }

}

