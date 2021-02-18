import {Component, OnInit, ViewChild} from '@angular/core';
import {WishlistCategoyRepo} from "../../../repo/repo/WishlistCategoyRepo";
import {StringUtility} from "../../../share/utility/StringUtility";
import {BigchartcompareComponent} from "../../bigchart/bigchartcompare/bigchartcompare.component";

@Component({
  selector: 'app-wishlistview',
  templateUrl: './wishlistview.component.html',
  styleUrls: ['./wishlistview.component.css']
})
export class WishlistviewComponent implements OnInit {

  constructor(private wishcategy: WishlistCategoyRepo) {
  }

  ngOnInit(): void {

  }

  @ViewChild(BigchartcompareComponent) child: BigchartcompareComponent;

  market() {
    this.chart('INDEX-MARKET')
  }

  commodity() {
    this.chart('INDEX-COMMODITY')
  }

  asx() {
    this.chart('INDEX-ASX')
  }

  buy() {
    this.chart('BUY')
  }

  gold() {
    this.chart('INDEX-GOLD')
  }

  chart(categoy: string) {
    this.wishcategy.getCatetoryCodes(categoy).subscribe(value => {
      console.log(value);
      let mycode = StringUtility.getstringcomma(value)
      this.child.code = mycode
      this.child.ngOnInit()
      this.child.submitLogin()
    })

  }

}

