var module = angular.module('app');
module.controller('viewController', Controller);


function Controller($scope, $rootScope, $http, $state, $location) {
    $scope.loading = true;
    var type = $state.params.type;
    var id = $state.params.id;
    $scope.mychartbutton = function () {
        console.log('----------viewController -GOING ROUTE-----1');
        $location.path("main/viewchart");
    };
    $scope.chartdetail = function (code) {
        alert('helo world  -1: '+ code);
        $location.path("main/multichart/"+code);

    };
    $http.get($rootScope.config.algoturl + type + '/' + id + '?sector=200').then(function (data) {
        // $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        $scope.data = data.data
        $rootScope.algoscope = [];


        $scope.data.forEach(function (item, index) {
            $rootScope.algoscope.push(item.code);
        });
        $scope.loading = false;
    });
};