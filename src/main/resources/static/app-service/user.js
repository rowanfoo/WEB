angular
    .module('app')
    .factory('User', Service);

function Service($http, $rootScope, $q, submitform) {
    var service = {};
    service.GetUserAlgo = getUserAlgo;
    service.SaveUserAlgo = saveUserAlgo;
    return service;


    function getUserAlgo(user) {

        var wishlisturl = $rootScope.config.userurl
        var q = $q.defer();
        var algoscope = [];
        $rootScope.algoscope = [];
        var wishlisturl = wishlisturl + 'user/algo/rowan';
        $http.get(wishlisturl).then(function (data) {
                // console.log("------------------main------GetUserAlgo--------OK!!!---------------------");
                // console.log(JSON.stringify(data, null, "    "));
                var mydata = data.data;
                mydata.forEach(function (obj) {
                    algoscope.push({id: obj.id, value: obj.value});
                });
                q.resolve(algoscope);
            }
            , function (err) {
                //  $scope.loading = false;
                // console.log("------------------main------GetUserAlgo--------ERRR----------123-----------");
                q.reject(err);
//                console.log(JSON.stringify(err, null, "    "));
            }
        );
        return q.promise;
    }


    function saveUserAlgo(user) {

        var userusrl = $rootScope.config.userurl + 'user/algo/rowan';
        submitform.sendData('PUT', userusrl, user).then(function (data) {

        });
        //  console.log("----end ---");
    }


}






