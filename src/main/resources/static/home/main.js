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

    $scope.golink = function (type, id) {
        var url = 'main/viewlist/' + type + '/' + id;
        $location.path(url);
    };

    $scope.gofav = function () {
        $location.path('/wishlist');
    };

    User.GetUserAlgo('rowan').then(function (data) {
        $scope.algos = data;
    });
};
