// var module = angular.module('app', ['ui.bootstrap', 'ui.utils']);
var module = angular.module('app');


module.controller('sideNavController', Controller);

function Controller($scope, $rootScope, $location, $http, User) {
    $scope.code = '';
    var counter = 0;
    $scope.notes = [];
    $scope.algos = [];
    $scope.loading = true;
    $scope.golink = function (type, id) {
        var url = 'main/viewlist/' + type + '/' + id;
        $location.path(url);
    };

    $scope.gofav = function () {
        $location.path('/wishlist');
    };


    $scope.goCat = function () {
        $location.path('/category');
    };

    $scope.goconfig = function () {
        $location.path('/useralgo');
    };

    $scope.summary = function () {
        $location.path('/main/summary');
    };


    User.GetUserAlgo('rowan').then(function (data) {
        $scope.algos = data;
        $scope.loading = false;
        //console.log(JSON.stringify($scope.algos, null, "    "));
    }, function (err) {
        $scope.loading = false;
        // console.log("------------------main------GetUserAlgo--------ERRR---------------------");
        // console.log(JSON.stringify(err, null, "    "));

    });

    $scope.dataTableOpt = {
        //custom datatable options
        // or load data through ajax call also
        "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, 'All']],
    };
    console.log("------------------show now summary---------------------");


};
