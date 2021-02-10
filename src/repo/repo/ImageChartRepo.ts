import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "../../share/Config";
import {ImageChart} from "../model/ImageChart";

@Injectable()
export class ImageChartRepo {


  constructor(private http: HttpClient) {
  }

  // getid(id: string): Observable<ImageChart> {
  // }

  save(imageChart: ImageChart) {
    let commenturl = Config.imageurl;
    return this.http.put(commenturl, imageChart)
  }

  // delete(codes: string) {
  //   let commenturl = Config.commenturl;
  //   console.log('---Deletee-----1--' + commenturl + '/' + codes);
  //   this.http.delete(commenturl + '/' + codes).subscribe(value => {
  //     console.log(value)
  //   })
  // }


}
