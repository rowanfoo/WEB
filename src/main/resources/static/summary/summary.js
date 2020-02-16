var module = angular.module('app');

module.controller('summaryController', CONTROLLER);

function CONTROLLER($scope, $http, Summary) {

    Summary.GetToday().then(function (data) {
        console.log(JSON.stringify(data, null, "    "));
        $scope.data = []
        console.log(data.status);
        $scope.data.push(data);

    });


};// eoc






