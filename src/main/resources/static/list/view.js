var module = angular.module('app');
module.controller('viewController', Controller);


function Controller($scope, $rootScope, $http, $state, $location) {
    console.log('----------viewController -HERE IN CONTROLLER----------viewController-');

    // var type = $routeParams.type;
    // var id = $routeParams.id;
    var type = $state.params.type;
    var id = $state.params.id;

    console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);

    $scope.mychartbutton = function () {
        console.log('----------viewController -GOING ROUTE-----1');
        $location.path("main/viewchart");

    }


    $http.get('http://localhost:8080/' + type + '/' + id + '?sector=200').then(function (data) {
        // $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        //    console.log(JSON.stringify(data, null, "    "))
        $scope.data = data.data
        $rootScope.algoscope = [];


        $scope.data.forEach(function (item, index) {
            // console.log('------viewController -HERE IN CONTROLLER----------- ' + item.code);
            $rootScope.algoscope.push(item.code);

        });


    });


    // function  lookchart() {
    //     callAtInterval();
    //     $interval(callAtInterval, 15000);
    //
    // };
    // function callAtInterval() {
    //     console.log('------INTERVAL---ALL----CODE--------- ' + rsicode);
    //     console.log('------INTERVAL---ALL----CODE--------- ' + rsicode[0]);
    //     var code = rsicode[counter++];
    //     $scope.code = code;
    //     $scope.message = rsivalue[counter++];
    //     var intervalurl = serverurl + "/dategt?date=2019-01-01&code=" + code;
    //
    //     console.log('------INTERVAL-------CODE--------- ' + code);
    //
    //
    //     getData($http, intervalurl).then(function (value) {
    //         createChart(value, "container");
    //     });
    //
    //
    // };

};