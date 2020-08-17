import {Component, OnInit} from '@angular/core';
import {WishlistCategoyRepo} from "../../../repo/repo/WishlistCategoyRepo";
import {StringUtility} from "../../../share/utility/StringUtility";

@Component({
  selector: 'app-wishlistedit',
  templateUrl: './wishlistedit.component.html',
  styleUrls: ['./wishlistedit.component.css']
})
export class WishlisteditComponent implements OnInit {
  public category: string[] = []
  categoryselected: string
  catcodes: string


  constructor(private wishcategy: WishlistCategoyRepo) {
  }

  ngOnInit() {
    this.wishcategy.getAllCategory().subscribe(value => {
      value.forEach(cat => {
        console.log(cat.name);

        this.category.push(cat.name)


      })
    })

  }

  wishlistcharts(event: any) {
    let cat = event.value
    console.log(cat);

    this.wishcategy.getCatetoryCodes(cat).subscribe(value => {
      console.log(event.value);

      let mycode = StringUtility.stringcomma(value)
      console.log(mycode);
      this.catcodes = mycode
      this.wishlist.code = mycode
    })


  }

  wishlist = {
    code: '',
    category: ''
  };


  onSumbit() {
    // console.log('-----------' + this.categoryselected + '-----------------' + this.catcodes);
    console.log(this.wishlist);
    this.wishcategy.updateCategory(this.wishlist).subscribe(value => {
      console.log(value);
    }, error1 => {
      console.log(error1);
    })


  }
}
