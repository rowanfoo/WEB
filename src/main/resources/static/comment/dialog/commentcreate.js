angular
    .module('app')
    .factory('CommentCreate', Service);

function Service($http, $rootScope, $q, Config, $mdDialog) {
    var service = {};
    service.Createcontroller = createcontroller;
    return service;

    function createcontroller($scope, $http, aTitle, $mdDialog) {
        $scope.code = aTitle;
        $scope.selected = 'equity';

        // $scope.comment.code = aTitle;
        // $scope.comment.userid = 'rowan';

        $scope.comment = {
            code: aTitle,
            userid: 'rowan',
            type: 'equity'
        }


        Config.GetConfig('comment', '0').then(function (data) {
            $scope.config = data
            //           console.log(JSON.stringify($scope.config, null, "    "));
        });


        $scope.myFunc = function () {
            console.log('-----------submit---------');
            //    Config.Save($scope.comment);
            console.log(JSON.stringify($scope.comment, null, "    "));
            $mdDialog.hide();
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
