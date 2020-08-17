import {Fundamental} from "./Fundamental";
import {CoreStock} from "./CoreStock";
import {News} from "./News";

export class TechStr {

  constructor(public code: string, public date: string, public type: string, public message: string) {

  }

  public fundamental: Fundamental
  public stock: CoreStock
  public news: News

}





