import {Component, OnInit} from '@angular/core';
import {Algo} from "../../repo/model/User";

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})
export class AlgoComponent implements OnInit {

  constructor() {
  }


  useralgo: Algo[]

  ngOnInit() {
    let algostring: string = JSON.parse(sessionStorage.getItem("user")).algo
    console.log('v1')
    console.log(algostring)


//    console.log(sessionStorage.getItem("useralgo"));

    algostring = algostring.replace("\\", "")
    this.useralgo = JSON.parse(algostring);

    console.log(this.useralgo.constructor.name);
    console.log(this.useralgo);

    this.useralgo.forEach(value => {
      console.log(value);
    })


    // let zzzz = sessionStorage.getItem("useralgo")
    // let y = JSON.parse("[" + zzzz + "]");
    // console.log(y);
    // console.log(y.constructor.name);
    //
    // console.log(y[0]);

    // let xx = JSON.parse(<any>user.algo)
    //this.useralgo = JSON.parse(xx)
    // this.useralgo = user
    //  console.log('---------AlgoComponent----------')
//    console.log(user)
//    console.log(this.useralgo.constructor.name);

    //console.log(this.useralgo)
    // this.useralgo.forEach(value => {
    //   console.log(value);
    // })
//    console.log(this.useralgo.constructor.name);

  }


}
