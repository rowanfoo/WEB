//var module = angular.module('app', ['ngMaterial' ]);
var module = angular.module('app', ['ngMaterial']);
module.controller('commentController', CONTROLLER);

function CONTROLLER ($scope) {
    $scope.showcomment = false;
    $scope.ma=[];
    $scope.comments=[];
    $scope.comments.push({value:'hello word' });
    $scope.comments.push({value:'this is my contents' });
    $scope.comments.push({value:'this is MORE contents' });
    $scope.comment={value:''};

    $scope.newItem = function () {
        console.log("--------------new item------");
        $scope.ma.push("a" );
    };
    $scope.showComment = function () {
        $scope.showcomment = true;
    };


    $scope.mySumbit = function () {
        console.log("------------SUBMIT---");
        console.log("------------SUBMIT---"+  $scope.comment.value);

        $scope.comments.push({value: $scope.comment.value });
        $scope.comment.value='';
        $scope.ma=[];


    };



};// eoc
