import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CoreDataRepo} from "./repo/CoreDataRepo";
import {CommonModule} from "@angular/common";
import {UserRepo} from "./repo/UserRepo";
import {AlgoRepo} from "./repo/AlgoRepo";
import {WishlistCategoyRepo} from "./repo/WishlistCategoyRepo";
import {WishListRepo} from "./repo/WishListRepo";
import {WishlistSummaryRepo} from "./repo/WishlistSummaryRepo";
import {CommentRepo} from "./repo/CommentRepo";
import {FundamentalRepo} from "./repo/FundamentalRepo";
import {NewsRepo} from "./repo/NewsRepo";
import {CategoryRepo} from "./repo/CategoryRepo";
import {UserConfigRepo} from "./repo/UserConfigRepo";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [CoreDataRepo, UserRepo, AlgoRepo, WishlistCategoyRepo, WishListRepo, WishlistSummaryRepo, CommentRepo, FundamentalRepo, NewsRepo, CategoryRepo, UserConfigRepo],

})
export class RepoModule {
}
