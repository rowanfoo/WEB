import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../service/EventService";

@Component({
  selector: 'app-intervalchart',
  templateUrl: './intervalchart.component.html',
  styleUrls: ['./intervalchart.component.css']
})
export class IntervalchartComponent implements OnInit {

  @Input() codes: string;

  constructor(private  core: CoreDataRepo, private  route: ActivatedRoute  , private event : EventService) {
  }

  mycode: string

  ngOnInit() {
    let timer = interval(20000)
    let code = this.route.snapshot.params['code'];
    let asxcodes: string[] = code.split(",")
    let count = 0
    asxcodes.forEach(value => console.log('------------------IntetvalChart--------' + value))

    timer.subscribe(value => {
        console.log(value)
        if (count < asxcodes.length) {
          this.mycode = asxcodes[count++]

          event

          console.log('------------------IntetvalChart----VAL----' + this.mycode)
        }
      }
    )
  }
}
