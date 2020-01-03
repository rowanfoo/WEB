var module = angular.module('app');
module.controller('viewDetailController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, CommentCreate, $mdDialog, Fundamental, Comment, News) {
    //  $scope.loading = true;
    var code = $state.params.code;
    $scope.mycode = code;
    Fundamental.GetFundamentalCode(code).then(function (data) {
        $scope.fundamental = data;
    });


    News.GetNewsCode(code).then(function (data) {
        console.log(JSON.stringify(data, null, "    "));
        $scope.news = data;

        // $scope.news = data.sort(function (a, b) {
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.date) - new Date(a.date);
        // });


    });

};