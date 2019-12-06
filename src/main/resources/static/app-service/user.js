angular
    .module('app')
    .factory('User', Service);

function Service($http,$rootScope, $localStorage, $q) {

    var service = {};
    service.GetUserAlgo = getUserAlgo;
 //   service.GetWishCodes = getWishCodes;
    return service;

    function getUserAlgo(user) {
        var wishlisturl = $rootScope.config.userurl
        console.log('HERE IN Service User  getUserAlgo 1');
        var q = $q.defer();
        var algoscope = [];
        $rootScope.algoscope=[];
        var wishlisturl =  wishlisturl + 'user/rowanfoo';
        $http.get(wishlisturl).then(function (data) {
            var mydata = data.data;
           // console.log("hello world--------" + mydata);
           // console.log("hello world--------" + mydata.length);
            console.log(JSON.stringify(mydata, null, "    "));

            mydata.forEach(function (obj) {
                console.log(obj.id);
               // $rootScope.algoscope.push(obj.value);
                //$scope.algos.push({id: obj.id, value: obj.value});
                algoscope.push({id: obj.id, value: obj.value});
            });

            q.resolve(algoscope);
        });
        return q.promise;

    }




}






