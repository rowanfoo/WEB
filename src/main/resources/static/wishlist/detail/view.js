var module = angular.module('app');
module.controller('wishlistDetailController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, $mdDialog, CommentCreate, WishList,DTOptionsBuilder) {

    console.log('----------wishlistDetailController -HERE IN CONTROLLER----------viewController---v1');
    $scope.loading = true;
    // var type = $routeParams.type;
    // var id = $routeParams.id;
    var codes = $state.params.codes;

    WishList.GetWishDetails(codes).then(function (data) {
        $scope.data = data;
        $scope.loading = false;

        $rootScope.algoscope = [];
        $scope.data.forEach(function (item, index) {
            $rootScope.algoscope.push(item.code);
        });


    })
    // console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);

    // $scope.dataTableOpt = {
    //     //custom datatable options
    //     // or load data through ajax call also
    //     "aLengthMenu": [[20, 50, 100, -1], [20, 50, 100, 'All']],
    // };
    $scope.mychartbutton = function () {
        console.log('----------viewController -GOING ROUTE-----1');
        $location.path("main/viewchart");
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
    $scope.checkchange = true;
    $scope.checkchangefunc = function () {
        console.log("---click----checkchangefunc--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkchange) {
                console.log("---click----visisble--")
                dTable.DataTable().column(1).visible(true);
            } else {
                console.log("---click----not visisbe,--")
                dTable.DataTable().column(1).visible(false);
            }
        });
    };


    $scope.checktwentyma = true;
    $scope.cchecktwentymafunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checktwentyma) {
                dTable.DataTable().column(2).visible(true);
            } else {
                dTable.DataTable().column(2).visible(false);
            }
        });
    };


    $scope.checkfifty = true;
    $scope.fiftyfunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkfifty) {
                dTable.DataTable().column(3).visible(true);
            } else {
                dTable.DataTable().column(3).visible(false);
            }
        });
    };

    $scope.checkhundred = true;
    $scope.hundredfunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkhundred) {
                dTable.DataTable().column(4).visible(true);
            } else {
                dTable.DataTable().column(4).visible(false);
            }
        });
    };

    $scope.checktwohundred = true;
    $scope.twohundredfunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checktwohundred) {
                dTable.DataTable().column(5).visible(true);
            } else {
                dTable.DataTable().column(5).visible(false);
            }
        });
    };

    $scope.checkyearchange = true;
    $scope.yearchangefunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkyearchange) {
                dTable.DataTable().column(6).visible(true);
            } else {
                dTable.DataTable().column(6).visible(false);
            }
        });
    };

    $scope.checkmarketcap = true;
    $scope.marketcapfunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkmarketcap) {
                dTable.DataTable().column(7).visible(true);
            } else {
                dTable.DataTable().column(7).visible(false);
            }
        });
    };

    $scope.checkpe = true;
    $scope.pefunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkpe) {
                dTable.DataTable().column(8).visible(true);
            } else {
                dTable.DataTable().column(8).visible(false);
            }
        });
    };
    $scope.checkyield = true;
    $scope.yieldfunc = function () {
        console.log("---click----close1--")

        angular.element(document).ready(function () {
            var dTable = $('#details')
            if ($scope.checkyield) {
                dTable.DataTable().column(8).visible(true);
            } else {
                dTable.DataTable().column(9).visible(false);
            }
        });
    };

    angular.element(document).ready(function () {
        $('#details').DataTable( {
            "createdRow": function ( row, data, index ) {
                if ( data[1].replace(/[\$,]/g, '') * 1 <0 ) {
                    $('td', row).eq(1).addClass('highlight');
                }
            }
        } );
    } );

    // $scope.dataTableOpt = {
        //custom datatable options
        // or load data through ajax call also
        // "aLengthMenu": [[20, 50, 100, -1], [20, 50, 100, 'All']],
        // 'rowCallback': function(row, data, index){
        //     if(data[1]< 0>){
        //         $(row).find('td:eq(0)').css('color', 'red');
        //     }
        // }
    // };
        $scope.dataTableOpt = DTOptionsBuilder.newOptions();
    $scope.dataTableOpt.withOption('createdRow', function (row, data, dataIndex) {

        if ( data[1].replace(/[\$,]/g, '') * 1 <0 ) {
            console.log('---dataTableOpt-------'+data[1])
            $('td', row).eq(1).css('color', 'red');
            $('td', row).eq(1).css('font-weight', 'bold');

        }
    })




};

// <th>code</th>
// <th>change</th>
// <th>20 ma</th>
// <th>50 ma</th>
// <th>100 ma</th>
// <th>200 ma</th>
// <th>yearchange</th>
// <th>marketcap</th>
// <th>pe</th>
// <th>yield</th>
