var module = angular.module('app');
module.controller('multichartController', Controller);

function Controller($scope, $state, CoreData, HIGHCHARTDATE) {
    var code = $state.params.code;
    var counter = 0;
    $scope.chartname = [];
    $scope.chartname.push({name: "container0", value: "1 year"});
    $scope.chartname.push({name: "container1", value: "2 year"});
    $scope.chartname.push({name: "container3", value: "3 year"});
    $scope.mycode = code;

    CoreData.GetData("2019-01-01", code).then(function (value) {
        HIGHCHARTDATE.CreateChart(value, $scope.chartname[0].name);
    });

    CoreData.GetData(moment().subtract('year', 2).format('YYYY-MM-DD').toString(), code).then(function (value) {
        HIGHCHARTDATE.CreateChart(value, $scope.chartname[1].name);
    });

    CoreData.GetData(moment().subtract('year', 3).format('YYYY-MM-DD').toString(), code).then(function (value) {
        HIGHCHARTDATE.CreateChart(value, $scope.chartname[2].name);
    });
}
