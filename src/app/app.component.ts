import {Component, OnInit} from '@angular/core';
import {UserRepo} from "../repo/repo/UserRepo";
import {AlgoRepo} from "../repo/repo/AlgoRepo";
import {TechStr} from "../repo/model/TechStr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: TechStr[]

  ngOnInit(): void {

    console.log('------------AppComponent---------')
    // this.core.getData('BHP.AX', '2009-01-01').subscribe(
    //   (data) => {
    //     //console.log('success----' + data);
    //     data.forEach(value => {
    //         console.log(value);
    //       }
    //     )
    //
    //
    //   },
    //   (error) => {
    //     console.log('success----' + error);
    //   }
    // );


    this.user.loaduser('rowanf').subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data))
        //  sessionStorage.setItem("useralgo", JSON.stringify(data.algo))
      }
    )


    // this.algo.getData('rsi', '30<14')
    //   .subscribe(
    //     (data) => {
    //       //    console.log(data);
    //       this.data = data
    //     }
    //   )
    //

  }

  title = 'WEB';
  //
  // constructor(private  core: CoreDataRepo, private user: UserRepo) {
  // }

  code = "BHP.AX"

  constructor(private user: UserRepo, private algo: AlgoRepo) {
  }

}
