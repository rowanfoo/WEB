// export class WishlistDetail{
//
//
//   constructor(
//
//  code:string
//    twenty:number
//    fifty:number
//    onehundred:number
//    twohundred:number
//    yearchange:number
//    marketcap:number
//    pe:number
//    yield:number
//     change:number
//
//
// ){
//
//   }
//
//
//
// }

export interface WishlistDetail {
  code: string,
  pe: number,
  yield: number,
  change: number,

  percentage20: number,
  maprice20: number,
  percentage50: number,
  maprice50: number,
  percentage100: number,
  maprice100: number,
  percentage200: number,
  maprice200: number,
  highthisweeK: number,
  minthisweek: number,
  endthisweek: number,
  startthisweek: number,
  today: number,
  yearhigh: number



}

