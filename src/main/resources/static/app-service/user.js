angular
    .module('app')
    .factory('User', Service);

function Service($http, $rootScope, $q) {
    var service = {};
    service.GetUserAlgo = getUserAlgo;
    return service;

    function getUserAlgo(user) {

        var wishlisturl = $rootScope.config.userurl
        var q = $q.defer();
        var algoscope = [];
        $rootScope.algoscope = [];
        var wishlisturl = wishlisturl + 'user/algo/rowan';
        $http.get(wishlisturl).then(function (data) {
            // console.log(JSON.stringify(data, null, "    "));
            var mydata = data.data;
            mydata.forEach(function (obj) {
                algoscope.push({id: obj.id, value: obj.value});
            });
            q.resolve(algoscope);
        });
        return q.promise;
    }
}






