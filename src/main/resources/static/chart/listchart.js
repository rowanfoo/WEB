var module = angular.module('app');
module.controller('listchartController', Controller);

function Controller($scope, $state, CoreData, HIGHCHARTDATE) {
    console.log('----------------listchartController-------------------------------');
    var code = $state.params.code;
    var counter = 0;
    $scope.chartname = [];
    $scope.chartname = code.split(',');

    console.log('----------------listchartController----------------' + code);

    $scope.chartname.forEach(function (data) {
        CoreData.GetData("2019-01-01", data).then(function (value) {
            HIGHCHARTDATE.CreateChart(value, data);
        });
    });
}
