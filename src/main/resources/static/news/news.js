var module = angular.module('app');

module.controller('newsController', CONTROLLER);

function CONTROLLER($scope, $rootScope, News) {
    $scope.callback = function (code) {
        console.log('  ----token 2 ' + code);

        News.GetNewsCode(code).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            $scope.news = data;

        });


    };


};