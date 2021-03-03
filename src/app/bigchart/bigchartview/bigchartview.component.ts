import {Component, ElementRef, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BigChart} from "../../../repo/model/BigChart";
import {BigChartRepo} from "../../../repo/repo/BigChartRepo";
import {fngetcodeonly} from "../../../etc/StringFunction";

@Component({
  selector: 'app-bigchartview',
  templateUrl: './bigchartview.component.html',
  styleUrls: ['./bigchartview.component.css']
})
// @Directive({
//   selector: '[appHighlight]'
// })

export class BigchartviewComponent implements OnInit {

  constructor(private bigChartRepo: BigChartRepo, private  route: ActivatedRoute, public ele: ElementRef) {
  }

// this is to trigger a refresh in the component when we change the property codes in the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.codes.currentValue)
  }

  bigcharts: BigChart[]
  code: string
  width: string
  count = 0
  count1 = 0
  year: number
  buttontext: string
  buttontext2: string
  load = true;
  @Input() codes: string;

  ngOnInit() {
    console.log('------------------BigchartviewComponent------------------------');
    let code = this.route.snapshot.params['code'];
    let year = this.route.snapshot.params['year'];
    this.code = code
    this.year = year
    if (this.code == null) {
      code = this.codes
      year = 1
    }
    code = fngetcodeonly(code)
    this.code = code
    this.bigChartRepo.getimages(code, year).subscribe(value => {
      console.log(value);
      this.bigcharts = value
      this.load = false;
    })


    this.width = '800;'
    this.buttontext = 'summary'
    this.buttontext2 = 'random'

  }

  goClick() {
    if (this.count == 0) {
      this.width = '100%;'
      this.count++
      this.buttontext = 'large'
    } else if (this.count == 1) {
      console.log(' ok ORIGINAL')
      this.width = '2000px;'
      this.count++
      this.buttontext = 'original'
    } else {
      this.count = 0
      this.width = '1000px;'
      this.buttontext = 'summary'
    }
  }


  goClick2() {
    this.load = true;
    if (this.count1 == 0) {
      this.bigChartRepo.getimagesrandomTwoyear(this.code).subscribe(value => {
        console.log(value);
        this.load = false;
        this.bigcharts = value
      })
      this.count1++
      this.buttontext2 = 'chart'
    } else {
      this.bigChartRepo.getimages(this.code, this.year).subscribe(value => {
        this.load = false;
        console.log(value);
        this.bigcharts = value
      })
      this.count1 = 0
      this.buttontext2 = 'random'
    }
  }
}
