var module = angular.module('app');
module.controller('intervalController', Controller);

function Controller($scope, $rootScope, $http, $interval, CoreData, HIGHCHART) {
    var rsicode = $rootScope.algoscope;
    // var serverurl = "http://localhost:8080/";
    var counter = 0;
    callAtInterval();
    var myinterval = $interval(callAtInterval, 15000);function callAtInterval() {
        if (counter > rsicode.length) $interval.cancel(myinterval);
        var code = rsicode[counter];
        $scope.mycode = code;
        counter++;
        $scope.code = code;
            CoreData.GetData("2019-01-01" ,code).then(function (value) {
            HIGHCHART.CreateChart(value, "container");
        });
    };
}
