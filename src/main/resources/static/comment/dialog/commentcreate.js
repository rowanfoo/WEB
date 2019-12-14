angular
    .module('app')
    .factory('CommentCreate', Service);

function Service($http,$rootScope, $q) {
    var service = {};
    service.Createcontroller = createcontroller;
    return service;
    function createcontroller($scope, $http, aTitle) {
   console.log('-----------CommentCreate---------' +aTitle );
        $scope.code = aTitle;

        $scope.myFunc = function () {
            console.log('-----------submit---------'  );
            console.log(JSON.stringify($scope.comment, null, "    "));
        }



    };




    // function getUserAlgo(user) {
    //     var wishlisturl = $rootScope.config.userurl
    //     var q = $q.defer();
    //     var algoscope = [];
    //     $rootScope.algoscope=[];
    //     var wishlisturl =  wishlisturl + 'user/rowanfoo';
    //     $http.get(wishlisturl).then(function (data) {
    //         var mydata = data.data;
    //         mydata.forEach(function (obj) {
    //             algoscope.push({id: obj.id, value: obj.value});
    //         });
    //         q.resolve(algoscope);
    //     });
    //     return q.promise;
    // }
}
