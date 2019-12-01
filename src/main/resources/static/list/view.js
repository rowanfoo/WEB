var module = angular.module('app');
module.controller('viewController', Controller);


function Controller($scope, $http, $state) {
    console.log('----------viewController -HERE IN CONTROLLER----------viewController-');

    // var type = $routeParams.type;
    // var id = $routeParams.id;
    var type = $state.params.type;
    var id = $state.params.id;

    console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);

    $http.get('http://localhost:8080/' + type + '/' + id + '?sector=200').then(function (data) {
        // $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        console.log(JSON.stringify(data, null, "    "))
        $scope.data = data.data

    });


};