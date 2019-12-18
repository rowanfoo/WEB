var module = angular.module('app');
module.controller('wishlistController', Controller);


function Controller($scope, $location, $http, $rootScope, WishList) {
    console.log('H------------------------------wishlistController------------------------------R');
    $scope.alert = function (arg) {
    }

    $scope.createnews = function () {
        //console.log('H------------------------------CLICKE ME---5---------------------------R');
        //$location.path('/wishlist/wishcreate/');
        $location.path('/wishlist/wishcreate');

//         $location.path('/wishlist');
// //     $location.path('/wishlist-create');
//


    }

    $scope.editnews = function () {
    }

    $scope.selectedWishchart = '';
    //console.log('HERE IN CONTROLLER ------------------------------wishlistController--------------1');

    WishList.GetAllWishCategory().then(function (value) {
        ///  console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------****');
        $scope.wishlistlist = value;
        //  $scope.wishlistchartlist = value;
    });


    // console.log('HERE IN CONTROLLER ------------------------------wishlistController--------------2');

    //
    //
    //console.log(JSON.stringify($scope.wishlistlist, null, "    "));
    //console.log('HERE IN CONTROLLER ------------------------------wishlistController---WISHLIST----RESULT-------****');

    $scope.detailModel = function () {
        //  console.log('------------WISHLIST----detail-------***12*' + $scope.selectitem);
        WishList.GetWishCodes($scope.selectitem).then(function (value) {
            console.log('---------wishlistController---WISHLIST----detailModel-------***12*' + '/wishlist/wishdetail/' + value);

            $location.path('/wishlist/wishdetail/' + value);
        });
    };

    $scope.updateMode = function () {

        // $http.get(wishlisturl + '?category=' + $scope.selectedWishlistchartlist).then(function (data) {
        //     $scope.wishlistcatcode = data.data[0].code.split(',');
        //     $location.path('/wishlistchart');
        //
        // });

        console.log('---------wishlistController---WISHLIST----VAL-------***12*' + $scope.selectitem);
        WishList.GetWishCodes($scope.selectitem).then(function (value) {
            //  console.log('---------wishlistController---WISHLIST----updateMode-------***12*');
            var codes = value.split(",");

            $rootScope.algoscope = codes;

//            $scope.wishlist.code = value;
            $location.path('/wishlist/wishchart');

        });


    }; // eof updateMode

    $scope.alldata = [];

    $scope.detaillook = function () {

        console.log('----SELECTED detaillook **-------' + $scope.selectedWishlistlist);
        $http.get($rootScope.config.wishcategorycodes + '?category=' + $scope.selectedWishlistlist).then(function (data) {

            var mystocks = data.data[0].code;
            var mydate = moment().format('YYYY-MM-DD');
            //var mydate = '2018-12-14';

            console.log('----SELECTED detaillook **-------' + $rootScope.config.data + '/stocks?stocks=' + mystocks + '&date=' + mydate);

            $http.get($rootScope.config.data + '/stocks?stocks=' + mystocks + '&date=' + mydate).then(function (data) {
                console.log(JSON.stringify(data.data, null, "    "));
                for (i in data.data) {
                    $scope.alldata.push(data.data[i]);
                }

            });


/////////////////////////  TEST
            console.log('---------------------------------GETTING Algo url --------------' + $rootScope.config.algobycodes + ' ?codes=' + mystocks + '&date=' + mydate);
            $http.get($rootScope.config.algobycodes + ' ?codes=' + mystocks + '&date=' + mydate).then(function (data) {
                console.log('---------------------------------GETTING TECHDATA--------------');

                console.log(JSON.stringify(data, null, "    "));
                $scope.techdata = [];

                for (i in data.data) {
                    $scope.techdata.push(data.data[i]);

                }


            });

//////////////////////


            console.log('----SELECTED detaillook  ROUTE **-------');

            $location.path('/wishlistdetails');


        });
    }; // eof detaillook


    console.log('HERE IN CONTROLLER  DONE');


};
