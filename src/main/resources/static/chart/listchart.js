var module = angular.module('app');
module.controller('listchartController', Controller);

function Controller($scope, $state, CoreData, HIGHCHARTMINI, $timeout) {

// function Controller($scope, $state, CoreData, HIGHCHARTDATE, $timeout) {
    console.log('----------------listchartController-------------------------------');
    var code = $state.params.code;
    var counter = 0;
    $scope.chartname = [];
//    $scope.chartname = code.split(',');

//    $scope.chartname.push('EVN.AX');
    // $scope.chartname.push('WHC.AX');
    // console.log('----------------listchartController----------------' + code);

    var mychartname = [];
    mychartname = code.split(',');


    mychartname.forEach(function (data) {
        console.log('----------------listchartController---code-------------' + data);
        $scope.chartname.push(data);
        CoreData.GetData("2019-01-01", data).then(function (value) {

            HIGHCHARTMINI.CreateChart(value, data);


        });
    });


    //
    // $scope.chartname.forEach(function (data) {
    //     console.log('----------------listchartController---code-------------' + data);
    //     CoreData.GetData("2019-01-01", data).then(function (value) {
    //         HIGHCHARTDATE.CreateChart(value, data);
    //     });
    // });


    // $scope.init = function () {
    //     $scope.chartname = [];
    //     $scope.chartname.push('EVN.AX');
    //     console.log('----------------listchartController---INIT-------------');
    //     $scope.chartname.forEach(function (data) {
    //         console.log('----------------listchartController---code-------------' + data);
    //         CoreData.GetData("2019-01-01", data).then(function (value) {
    //             HIGHCHARTDATE.CreateChart(value, data);
    //         });
    //     });
    // };
    //
    //
    // $timeout($scope.init)
    //


    // $scope.$watch('listchartController', function () {
    //
    //     $scope.chartname = [];
    //     $scope.chartname.push('EVN.AX');
    //     console.log('----------------listchartController---INIT-------------');
    //     $scope.chartname.forEach(function (data) {
    //         console.log('----------------listchartController---code-------------' + data);
    //         CoreData.GetData("2019-01-01", data).then(function (value) {
    //             HIGHCHARTDATE.CreateChart(value, data);
    //         });
    //     });
    //
    //
    // });
    console.log('----------------listchartController---------------- END---------------' + $scope.chartname[0]);
    console.log('----------------listchartController---------------- END---------------');

}
