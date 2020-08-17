export class Fundamental {
  constructor(
public  code: string,
  public date: string,
  public  pe: number,
  public  eps: number,
  public  year_high_date: number,
  public  year_low_price: number,
  public  annual_dividend_yield: number,
  public  market_cap: number,
  public  number_of_shares: number,
  public martketcapAsString: string,
  public year_change_in_percentage: number
) {
}

}




// [{"code":"BHP.AX","" +
//     "date":"2020-03-27",
//   "pe":45.52,"eps":0.6738,"martketcapAsString":"90,349,262,315","year_high_date":42.33,"year_low_price":24.05,"annual_dividend_yield":2.34,"market_cap":90349262315,"number_of_shares":2945851396,"year_change_in_percentage":-25.217}]
