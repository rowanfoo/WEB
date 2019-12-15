var module = angular.module('app');
module.controller('viewController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, CommentCreate, $mdDialog) {
    $scope.loading = true;
    var type = $state.params.type;
    var id = $state.params.id;
    $scope.mychartbutton = function () {
        console.log('----------viewController -GOING ROUTE-----1');
        $location.path("main/viewchart");
    };
    $scope.chartdetail = function (code) {
        alert('helo world  -1: ' + code);
        $location.path("main/multichart/" + code);

    };


    $scope.comment = function (code) {
        alert('comment: ' + code);
        $mdDialog.show({
            //  templateUrl: "/WEB/static/dialog.html",
            templateUrl: "/WEB/static/comment/dialog/commentDialog.html",
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {aTitle: code},
            controller: function ($scope, $http, aTitle) {
                CommentCreate.Createcontroller($scope, $http, aTitle, $mdDialog)
            }
        });
    };


    $http.get($rootScope.config.algoturl + type + '/' + id + '?sector=200').then(function (data) {
        // $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        $scope.data = data.data
        $rootScope.algoscope = [];


        $scope.data.forEach(function (item, index) {
            $rootScope.algoscope.push(item.code);
        });
        $scope.loading = false;
    });
};