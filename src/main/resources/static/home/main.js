$(document).ready(function () {
    $('#example').DataTable();
});

var module = angular.module('app');
module.controller('sideNavController', Controller);

function Controller($scope, $rootScope, $location, $http, User) {
    $scope.code = '';
    var counter = 0;
    $scope.notes = [];
    $scope.algos = [];
    $scope.loading = true;
    console.log("------------------main--------------sideNavController---------------------");
    $scope.golink = function (type, id) {
        var url = 'main/viewlist/' + type + '/' + id;
        $location.path(url);
    };

    $scope.gofav = function () {
        $location.path('/wishlist');
    };


    $scope.goconfig = function () {
        $location.path('/useralgo');
    };

    User.GetUserAlgo('rowan').then(function (data) {
        $scope.algos = data;
        $scope.loading = false;
        console.log(JSON.stringify($scope.algos, null, "    "));
    }, function (err) {
        $scope.loading = false;
        console.log("------------------main------GetUserAlgo--------ERRR---------------------");
        console.log(JSON.stringify(err, null, "    "));

    });
};
