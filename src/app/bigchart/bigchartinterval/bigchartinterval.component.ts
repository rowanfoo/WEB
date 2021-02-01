import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bigchartinterval',
  templateUrl: './bigchartinterval.component.html',
  styleUrls: ['./bigchartinterval.component.css']
})
export class BigchartintervalComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  subscription: Subscription;

  constructor(private  route: ActivatedRoute) {
  }

  mycode: string
  link: string
  codes: string

  ngOnInit() {
    console.log("BigchartintervalComponent")
    let timer = interval(20000)
    let code = this.route.snapshot.params['codes'];
    this.codes = code
    let tempcodes: string[] = code.split(",")
    let asxcodes: string[] = []
    let count = 0
    tempcodes.forEach(value => {
      asxcodes.push(value.substring(0, value.indexOf(".")))
    })


    this.mycode = asxcodes[count++]
    this.subscription = timer.subscribe(value => {
        console.log(value)
        if (count < asxcodes.length) {
          this.mycode = asxcodes[count++]
          console.log('------------------IntetvalChart----VAL----' + this.mycode)
        }
      }
    )
  }

}




