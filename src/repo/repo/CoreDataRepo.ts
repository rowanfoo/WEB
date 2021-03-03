import {Injectable} from "@angular/core";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {CoreData} from "../model/CoreData";
import {HttpClient} from "@angular/common/http";

@Injectable()
//export class CoreDataRepo {// extends BaseRepo {
//

export class CoreDataRepo {
  constructor(private http: HttpClient) {
  }


  getData(code: string, date: string): Observable<CoreData[]> {
    //getData(): Observable<CoreData[]> {
    console.log('---------getDataDate-------');
    var url = Config.algoturl
    var codeurl = url + 'dategt?' + 'date=' + date + '&code=' + code;
    //  var codeurl = url + 'dategt?' + 'date=2006-01-01&code=BHP.AX';
    console.log('---------getDataDate-------' + codeurl);
    return this.http.get<CoreData[]>(codeurl).pipe(
      map(value => {
        //console.log(value);
        return value
      })
    );


  }


  // getDataChart(code: string, date: string): [ChartData[]] {
  //   let seriesOptions: [ChartData[]] = [[]];
  //
  //   this.getData(code, date).subscribe(data => {
  //     data.forEach(value => {
  //       seriesOptions.push([
  //         new ChartData(
  //           new Date(value.date).getTime(), // the date
  //           value.open, // open
  //           value.high, // high
  //           value.low, // low
  //           value.close// close
  //         )]);
  //     });
  //
  //
  //   })
  //
  //
  //   return seriesOptions;
  //
  // }

  getDataChart(code: string, date: string): Observable<any> {
    // getDataChart(code: string, date: string): Observable<[ChartData[]]> {
//    let seriesOptions: [ChartData[]] = [[]];
    let seriesOptions = [];
    // @ts-ignore
    return this.getData(code, date).pipe(map(value => {
      // return [
      //   new ChartData(
      //     new Date(value.date).getTime(), // the date
      //     value.open, // open
      //     value.high, // high
      //     value.low, // low
      //     value.close// close
      //   )
      //
      // ]

      // value.forEach(value => {
      //   seriesOptions.push([
      //     new ChartData(
      //       new Date(value.date).getTime(), // the date
      //       value.open, // open
      //       value.high, // high
      //       value.low, // low
      //       value.close// close
      //     )]);
      // });

      value.forEach(value => {
        seriesOptions.push([
          new Date(value.date).getTime(), // the date
          value.open, // open
          value.high, // high
          value.low, // low
          value.close// close

        ]);
      });


      // data.forEach(value => {
      //   seriesOptions.push([
      //     new Date(value.date).getTime(), // the date
      //     value.open, // open
      //     value.high, // high
      //     value.low, // low
      //     value.close// close
      //   ]);
      // });
      //

      return seriesOptions;


    }))


    // subscribe(data => {
    //   data.forEach(value => {
    //     seriesOptions.push([
    //       new ChartData(
    //         new Date(value.date).getTime(), // the date
    //         value.open, // open
    //         value.high, // high
    //         value.low, // low
    //         value.close// close
    //       )]);
    //   });
    //
    //
    // })


    //  return seriesOptions;

  }


}


class ChartData {
  constructor(public  date: any, public  open: number, public  high: number, public   low: number, public  close: number) {
  }
}
