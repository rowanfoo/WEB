import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Algo, User} from "../model/User";
import {Injectable} from "@angular/core";

@Injectable()
export class UserRepo {

  constructor(private http: HttpClient) {
  }

  // getUserAlgo(user:string ): Observable<CoreStock[]> {
  //   console.log('---------getDataDate-------');
  //   var url = Config.algoturl + 'stocks';
  //   return this.http.get<CoreStock[]>(url);
  // }


   loaduser(user: string): Observable<User> {
    console.log('---------loaduser-------');
    let url = Config.userurl + 'user/user/' + user
    console.log('---------loaduser-------' + url);
    return this.http.get<User>(url);
  }

  getSessionUserAlgo(): Algo[] {
    let algostring: string = JSON.parse(sessionStorage.getItem("user")).algo
    console.log('v1')
    console.log(algostring)


    algostring = algostring.replace("\\", "")
    let useralgo = JSON.parse(algostring);
    return useralgo
    // console.log(this.useralgo.constructor.name);
    // console.log(this.useralgo);

    // this.useralgo.forEach(value => {
    //   console.log(value);
    // })

  }

  saveUserAlgo(algo: Algo[]) {
    let username: string = JSON.parse(sessionStorage.getItem("user")).username
    let userusrl = Config.userurl + 'user/algo/' + username;
    console.log('-----saveUserAlgo----------' + userusrl)
    return this.http.put(userusrl, algo)
  }


}


// function getUserAlgo(user) {
//
//   var wishlisturl = $rootScope.config.userurl
//   var q = $q.defer();
//   var algoscope = [];
//   $rootScope.algoscope = [];
//   var wishlisturl = wishlisturl + 'user/algo/rowan';
//   $http.get(wishlisturl).then(function (data) {
//       // console.log("------------------main------GetUserAlgo--------OK!!!---------------------");
//       // console.log(JSON.stringify(data, null, "    "));
//       var mydata = data.data;
//       mydata.forEach(function (obj) {
//         algoscope.push({id: obj.id, value: obj.value});
//       });
//       q.resolve(algoscope);
//     }
//     , function (err) {
//       //  $scope.loading = false;
//       // console.log("------------------main------GetUserAlgo--------ERRR----------123-----------");
//       q.reject(err);
// //                console.log(JSON.stringify(err, null, "    "));
//     }
//   );
//   return q.promise;
// }
//
//
// function saveUserAlgo(user) {
//
//   var userusrl = $rootScope.config.userurl + 'user/algo/rowan';
//   submitform.sendData('PUT', userusrl, user).then(function (data) {
//
//   });
//   //  console.log("----end ---");
// }
