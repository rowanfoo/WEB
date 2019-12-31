var module = angular.module('app');

module.controller('newsController', CONTROLLER);

function CONTROLLER($scope, $rootScope, $http, $localStorage, $location, jwtHelper, AuthenticationService) {
    $scope.callback = function (code) {
        console.log('  ----token 2 ' +code);
    };




};