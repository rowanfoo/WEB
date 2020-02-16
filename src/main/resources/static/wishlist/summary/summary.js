var module = angular.module('app');
module.controller('wishlistSummaryController', Controller);


function Controller($scope, $location, $http, $rootScope, $localStorage, DTOptionsBuilder, $mdDialog, CommentCreate) {
    $scope.loading = true;

    $scope.mychartbutton = function (code) {
        console.log('----------wishlistSummaryController -GOING ROUTE-----1');
        console.log("----------wishlistSummaryController -GOING ROUTE----" + code)

        $location.path("main/viewchart/" + code);
    };
    $scope.list = function (code) {
        $location.path('/main/listchart/' + code);
    };


    $http.get($rootScope.config.algoturl + 'wishlist/alldetails/' + $localStorage.currentUser).then(function (data) {
        // console.log(JSON.stringify(data, null, "    "));
        $scope.data = data.data
        $scope.loading = false;
        $rootScope.algoscope = [];
        //       console.log(JSON.stringify($scope.data, null, "    "));
        $scope.data.forEach(function (item, index) {
            console.log("---codes-----" + item.code);
            $rootScope.algoscope.push(item.code);
        });

    });
    // $scope.dataTableOpt = {
    //     //custom datatable options
    //     // or load data through ajax call also
    //     "aLengthMenu": [[20, 50, 100, -1], [20, 50, 100, 'All']],
    // };

    $scope.dataTableOpt = DTOptionsBuilder.newOptions();
    $scope.dataTableOpt.withOption('createdRow', function (row, data, dataIndex) {

        if (data[1].replace(/[\$,]/g, '') * 1 < 0) {
            console.log('---dataTableOpt-------' + data[1])
            $('td', row).eq(1).css('color', 'red');
            $('td', row).eq(1).css('font-weight', 'bold');

        }
    })
    // $scope.dataTableOpt.withOption("aLengthMenu", [10, 25, 50, 100]);
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('lengthMenu', [10, 25, 50, 100])
    $scope.dataTableOpt.withDisplayLength(20)
    $scope.dataTableOpt.withOption('order', [[1, 'asc']])

    ////////////////


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


    console.log('HERE IN CONTROLLER  DONE-1');


};
