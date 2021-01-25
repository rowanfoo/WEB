import {Component, OnInit} from '@angular/core';
import {UserConfigRepo} from "../../repo/repo/UserConfigRepo";

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})
export class AlgoComponent implements OnInit {

  // constructor() {
  // }
  constructor(private  userConfigRepo: UserConfigRepo) {
  }


//  useralgo: Algo[]

  useralgo: IUserConfig[] = []

// !!Prints all the algo (MA , Price fall , ...)
  ngOnInit() {
    console.log('-------AlgoComponent--------------')
    let algostring: string = JSON.parse(sessionStorage.getItem("user")).algo
    let userid: string = JSON.parse(sessionStorage.getItem("user")).id


    console.log('v1')
    //console.log(userid)
//    console.log(this.useralgo)
    // this is when if login authen fails then MANUAL run
    //console.log(sessionStorage.getItem("user").id)
    //  "3 = rowan"
    //let config = this.userConfigRepo.getuserconfig("3")

    let config = this.userConfigRepo.getuserconfig(userid)

    console.log('2')

    config.subscribe(value1 => {
      //   this.useralgo = value1;
      //  console.log(value1)
///print all the algo
      value1.forEach(value => {
        //  console.log(value.userid)
        //console.log(JSON.parse(value.algo).value)

        this.useralgo.push({id: value.id, value: JSON.parse(value.algo).value})
        // console.log(value.algo.value)
      })
    })

    // algostring = algostring.replace("\\", "")
    //this.useralgo = JSON.parse(algostring);

    //console.log(this.useralgo.constructor.name);
    //console.log(this.useralgo);

    // this.useralgo.forEach(value => {
    //   console.log(value);
    // })


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

interface IUserConfig {
  id: number;
  value: string;
}

//
// interface IUserConfigAlgo {
//   value: string;
// }
//
// let complexType: IComplexType;
// complexType = {id: 1, name: "test"};
