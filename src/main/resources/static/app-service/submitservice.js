var app = angular.module('app');
app.service('submitform', ['$http', '$q', function ($http, $q) {

    this.sendData = function (method, url, data) {
        var q = $q.defer();
        if (method == 'PUT') {

            console.log("------------------PUT------");
            // console.log(' SUBMIT  PUT    ----' + JSON.stringify(data, null, "    "));
            $http.put(url, data).then(
                function (response) {
                    console.log("------------------PUT------sumbt-----------");
                    // console.log('PUT' + response.data);
                    q.resolve(response.data);
                }
                , function (err) {
                    //  $scope.loading = false;
                    console.log("------------------PUT------sumbt--------ERRR--------------");
                    q.reject(err);
//                console.log(JSON.stringify(err, null, "    "));
                });

            return q.promise;


        } else if (method == 'POST') {
            // console.log(' SUBMIT  investigate-create    ----' + JSON.stringify(data, null, "    "));
            $http.post(url, data).then(
                function (response) {
                    console.log('POST  ' + response.data);
                    $mdDialog.hide();
                }
            ).catch(function (response) {
                console.log(' POSTerrr  ' + response.data);
            })

        } else if (method == 'DELETE') {

        }
        console.log('done submit');
    }
}]);


// angular
//     .module('app')
//     .factory('User', Service);
//
// function Service($http, $rootScope, $q) {
//     var service = {};
//     service.GetUserAlgo = getUserAlgo;
//     return service;
//
//     function getUserAlgo(user) {
//
//         var wishlisturl = $rootScope.config.userurl
//         var q = $q.defer();
//         var algoscope = [];
//         $rootScope.algoscope = [];
//         var wishlisturl = wishlisturl + 'user/algo/rowan';
//         $http.get(wishlisturl).then(function (data) {
//                 console.log("------------------main------GetUserAlgo--------OK!!!---------------------");
//                 // console.log(JSON.stringify(data, null, "    "));
//                 var mydata = data.data;
//                 mydata.forEach(function (obj) {
//                     algoscope.push({id: obj.id, value: obj.value});
//                 });
//                 q.resolve(algoscope);
//             }
//             , function (err) {
//                 //  $scope.loading = false;
//                 console.log("------------------main------GetUserAlgo--------ERRR----------123-----------");
//                 q.reject(err);
// //                console.log(JSON.stringify(err, null, "    "));
//             }
//         );
//         return q.promise;
//     }
// }
