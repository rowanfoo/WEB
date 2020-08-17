import {Component, OnInit} from '@angular/core';
import {WishlistCategoyRepo} from "../../../repo/repo/WishlistCategoyRepo";
import {StringUtility} from "../../../share/utility/StringUtility";
import {Router} from "@angular/router";
import {WishListRepo} from "../../../repo/repo/WishListRepo";
import {WishlistDetail} from "../../../repo/model/WishlistDetail";

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main.component.html',
  styleUrls: ['./wishlist-main.component.css']
})
export class WishlistMainComponent implements OnInit {

  constructor(private wishcategy: WishlistCategoyRepo, private route: Router, private wishlistrepo: WishListRepo) {
  }

  public category: string[] = []


  ngOnInit() {
    console.log('=====am i run first --WishlistMainComponent----- ');
    this.wishcategy.getAllCategory().subscribe(value => {
      value.forEach(cat => {
        console.log(cat.name);

        this.category.push(cat.name)


      })


//      console.log(this.category);
    })
  }


  wishlistcharts(event: any) {
    let cat = event.value
    console.log(cat);

    this.wishcategy.getCatetoryCodes(cat).subscribe(value => {
      console.log(event.value);

      let mycode = StringUtility.stringcomma(value)
      console.log(mycode);
      this.route.navigate(["algo/intervalchart/" + mycode]);
    })


  }

  wishlistDetail: WishlistDetail[]

  detailistcharts(event: any) {
    //  console.log(event.value);
    let cat = event.value
    console.log(cat);

    this.wishcategy.getCatetoryCodes(cat).subscribe(value => {
      //console.log('--------' + event.value);

      let mycode = StringUtility.stringcomma(value)
      // console.log('------cinvert----' + mycode);

      this.route.navigate(["wishlist/wishlistdetail/" + mycode]);


    })

  }


}

