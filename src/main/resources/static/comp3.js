//var module = angular.module('app', ['ngMaterial' ]);
var module = angular.module('app', ['ngMaterial']);
module.controller('commentController', CONTROLLER);

function CONTROLLER($scope, $mdDialog) {

    $scope.name = 'BHP>>>AX';


    $scope.showComment = function (code) {
        console.log('--------code---------' + code);
        $mdDialog.show({
            templateUrl: "/WEB/static/dialog.html",
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {aTitle: code},
            controller: function ($scope, $http, aTitle) {
                $scope.mycode = aTitle;
            }
        });
    };


};// eoc
