var module = angular.module('app');
module.controller('viewController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, CommentCreate, $mdDialog, Fundamental, Comment, $localStorage) {
    $scope.loading = true;
    var type = $state.params.type;
    var id = $state.params.id;
    $scope.mychartbutton = function () {
        console.log('----------viewController -GOING ROUTE-----1');
        $location.path("main/viewchart");
    };
    $scope.chartdetail = function (code) {
        $location.path("main/multichart/" + code);
    };

    $scope.list = function (code) {
        $location.path('/main/listchart/' + code);
    };

    $scope.comment = function (code) {
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

    $scope.detail = function (code) {
        $scope.mycode = code;
        var userid = $localStorage.currentUser;
        var url = 'main/viewdetail/' + code;
        $location.path(url);
    };
    console.log("======viewController==URL==============" + ($rootScope.config.algoturl + type + '/' + id + '?sector=300'));
    $http.get($rootScope.config.algoturl + type + '/' + id + '?sector=300').then(function (data) {
        //  $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        // console.log(JSON.stringify(data, null, "    "));
        $scope.data = data.data

        //
        $rootScope.algoscope = [];
        $scope.data.forEach(function (item, index) {
            $rootScope.algoscope.push(item.code);
            // console.log("=====================" + item.code + '-------' + item.news.length);


        });
        $scope.loading = false;
    });
    $scope.dataTableOpt = {
        //custom datatable options
        // or load data through ajax call also
        "aLengthMenu": [[20, 50, 100, -1], [20, 50, 100, 'All']],
        "order": [[5, "desc"]]
    };

};