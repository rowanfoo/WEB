import {News} from "./News";

export interface WishlistSummary {
  code: string,
  price: number,
  change: number,
  volume: number,
  message: string,
  news: News[],
  date: string
}

