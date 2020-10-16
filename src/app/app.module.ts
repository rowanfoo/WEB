import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RepoModule} from "../repo/repo.module";
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AlgoComponent} from './algo/algo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {AlgosComponent} from './algos/algos.component';
import {DataTablesModule} from "angular-datatables";
import {RouterModule} from "@angular/router";
import {AlgodatatableComponent} from './algo/algodatatable/algodatatable.component';
import {ChartComponent} from './chart/chart/chart.component';
import {DisplaychartComponent} from './chart/displaychart/displaychart.component';
import {IntervalchartComponent} from './chart/intervalchart/intervalchart.component';
import {EventService} from "../service/EventService";
import {MinichartComponent} from './chart/minichart/minichart.component';
import {WishlistMainComponent} from "./wishlist/wishlist-main/wishlist-main.component";
import {WishlistdetailComponent} from './wishlist/wishlistdetail/wishlistdetail.component';
import {WishlisteditComponent} from './wishlist/wishlistedit/wishlistedit.component';
import {WishlistsummaryComponent} from './wishlist/wishlistsummary/wishlistsummary.component';
import {ToolbarComponent} from './share/toolbar/toolbar.component';
import {CommentEditComponent} from './comment/comment-edit/comment-edit.component';
import {MultiIconComponent} from './share/multi-icon/multi-icon.component';
import {FundamentallListComponent} from './fundamental/fundamentall-list/fundamentall-list.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import {NewsListComponent} from './news/news-list/news-list.component';
import {ShareSummaryComponent} from './share/share-summary/share-summary.component';
import {ChartStockComponent} from './chart/chart-stock/chart-stock.component';
import {MomentModule} from "ngx-moment";
import {ConfigEditComponent} from './config/display/config-edit/config-edit.component';
import {ConfigAlgoComponent} from './config/config-algo/config-algo.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {AuthGuard} from "../service/AuthGuard";
import {AuthService} from "../service/AuthService";
import {CookieService} from "ngx-cookie-service";
import {NewsAllComponent} from './news/news-all/news-all.component';
import {FlexLayoutModule} from "@angular/flex-layout";

const routes = [
  {path: '', component: AppComponent},
  {
    path: 'algo', component: AlgoComponent, canActivate: [AuthGuard], children: [
      {path: 'datatable/:type/:value', component: AlgodatatableComponent},
      {path: 'chart/:code', component: ChartComponent},
      {path: 'intervalchart/:code', component: IntervalchartComponent},
      {path: 'minichart/:code', component: MinichartComponent},
      {path: 'displaychart', component: DisplaychartComponent},
      {path: 'allsummary/:code', component: ShareSummaryComponent},
      {path: 'multichart/:code', component: ChartStockComponent},
      // {path: 'homepage', component: AlgoComponent},
      {path: 'news', component: NewsAllComponent},
    ]


  },


  {
    path: 'wishlist', component: WishlistMainComponent, children: [
      {path: 'wishlistdetail/:code', component: WishlistdetailComponent},
      {path: 'wishlistedit', component: WishlisteditComponent},
      {path: 'wishlistsummary', component: WishlistsummaryComponent},
      {path: 'allsummary/:code', component: ShareSummaryComponent},
      {path: 'multichart/:code', component: ChartStockComponent}
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: '/', component: AlgoComponent
  // },


  // {
  //   path: 'algo', component: AlgoComponent
  //
  //
  // },


]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlgoComponent,
    AlgosComponent,
    AlgodatatableComponent,
    ChartComponent,
    DisplaychartComponent,
    IntervalchartComponent,
    MinichartComponent,
    WishlistMainComponent,
    WishlistdetailComponent,
    WishlisteditComponent,
    WishlistsummaryComponent,
    ToolbarComponent,
    CommentEditComponent,
    MultiIconComponent,
    FundamentallListComponent,
    CommentListComponent,
    NewsListComponent,
    ShareSummaryComponent,
    ChartStockComponent,
    ConfigEditComponent,
    ConfigAlgoComponent,
    CategoryListComponent,
    NewsAllComponent
  ],
  imports: [
    BrowserModule,
    RepoModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    MomentModule,
    FlexLayoutModule,

  ],
  providers: [EventService, AuthGuard, AuthService, CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CommentEditComponent, ConfigAlgoComponent]

})
export class AppModule {
}


//http://localhost:4200/algo/datatable/rsi/30<14
