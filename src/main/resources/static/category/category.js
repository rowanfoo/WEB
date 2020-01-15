var module = angular.module('app');
module.controller('categoryController', Controller);


function Controller($scope, $location, $http, $rootScope) {
    console.log('H------------------------------categoryController------------------------------R');

    $scope.details = function () {
        console.log('H------------------------------ROUTE GO------------------------------R');
        $location.path('/category/detail');
    }


}
;
