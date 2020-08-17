import {Component, OnInit} from '@angular/core';
import {Algo} from "../../../repo/model/User";

@Component({
  selector: 'app-config-algo',
  templateUrl: './config-algo.component.html',
  styleUrls: ['./config-algo.component.css']
})
export class ConfigAlgoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  algo: Algo

  submitLogin() {
  }
}
