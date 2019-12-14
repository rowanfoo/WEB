//var module = angular.module('app', ['ngMaterial' ]);
var module = angular.module('app', ['ngMaterial']);
module.controller('commentController', CONTROLLER);

function CONTROLLER($scope, $mdDialog ,CommentCreate) {

    $scope.name = 'BHP>>>AX';


    $scope.showComment = function (code) {
        console.log('--------code---------' + code);
        $mdDialog.show({
          //  templateUrl: "/WEB/static/dialog.html",
            templateUrl: "/WEB/static/comment/dialog/commentDialog.html",
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {aTitle: code},
            controller: function ($scope, $http, aTitle) {
//                $scope.mycode = aTitle;
                CommentCreate.Createcontroller  ($scope, $http, aTitle)
            }
            // controller:CommentCreate.Createcontroller  ($scope, $http, aTitle)


        });
    };


};// eoc
