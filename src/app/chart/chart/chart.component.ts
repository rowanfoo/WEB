import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {ActivatedRoute} from "@angular/router";
import {interval, Subscription} from "rxjs";

declare var JSCreateChart: any

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  @Input() codes: string;

  constructor(private  core: CoreDataRepo, private  route: ActivatedRoute) {
  }

  subscription: Subscription;

  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    console.log('------------------ChartComponent----params----' + code)
    console.log('------------------ChartComponent----data in ----' + this.codes)
    if (code == null) {
      code = this.codes
    }

    let asxcodes: string[] = code.split(',')
    let timer = interval(20000)
    let count = 1
    let mycode: string


    asxcodes.forEach(value => console.log('------------------IntetvalChart--------' + value))
    this.createChartX(asxcodes[0])

    this.subscription = timer.subscribe(value => {
        console.log(value)
        if (count < asxcodes.length) {
          mycode = asxcodes[count++]
          this.createChartX(mycode)
          console.log('------------------ChartComponent----VAL----' + mycode)
        }
      }
    )


    //   console.log('------------------ChartComponent--------' + code)


  }


  private createChartX(code: string) {
    console.log('-----------CREATE CHART------------' + code)

    let seriesOptions = [];
    this.core.getData(code, '2009-01-01').subscribe(
      (data) => {

        data.forEach(value => {
          seriesOptions.push([
            new Date(value.date).getTime(), // the date
            value.open, // open
            value.high, // high
            value.low, // low
            value.close// close
          ]);
        });
        console.log('----ChartComponent---createChart--')

        console.log(seriesOptions)

        JSCreateChart(seriesOptions, 'container', code)

      }
    );

  }

}
