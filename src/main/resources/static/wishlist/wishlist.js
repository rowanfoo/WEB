var module = angular.module('app');
module.controller('wishlistController', Controller);


function Controller($scope, $location, $http, $rootScope, WishList) {
    console.log('H------------------------------wishlistController------------------------------R');
    $scope.alert = function (arg) {
    };

    $scope.createnews = function () {
        $location.path('/wishlist/wishcreate');
    };

    $scope.editnews = function () {
    };

    $scope.selectedWishchart = '';

    WishList.GetAllWishCategory().then(function (value) {
        $scope.wishlistlist = value;
    });

    $scope.updateMode = function () {
        WishList.GetWishCodes($scope.selectitem).then(function (value) {
            console.log('---------wishlistController---WISHLIST----updateMode-------***12*');
            var codes = value.split(",");
            $rootScope.algoscope = codes;
            $location.path('/wishlist/wishchart');
        });


    }; // eof updateMode

    $scope.alldata = [];

    $scope.detaillook = function () {
        $http.get($rootScope.config.wishcategorycodes + '?category=' + $scope.selectedWishlistlist).then(function (data) {
            var mystocks = data.data[0].code;
            var mydate = moment().format('YYYY-MM-DD');

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
