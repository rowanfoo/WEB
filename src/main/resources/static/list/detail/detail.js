var module = angular.module('app');
module.controller('viewDetailController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, CommentCreate, $mdDialog, Fundamental, Comment) {

    //  $scope.loading = true;
    var code = $state.params.code;
    $scope.mycode = code;
    Fundamental.GetFundamentalCode(code).then(function (data) {

        // console.log(JSON.stringify(data, null, "    "));
        $scope.fundamental = data;
    });


};