var module = angular.module('app');

module.controller('wishlistController', Controller);


function Controller($scope, $location, $http, $rootScope) {
    console.log('H------------------------------wishlistController------------------------------R');
    $scope.alert = function (arg) {
    }

    $scope.createnews = function () {
        console.log('H------------------------------CLICKE ME---5---------------------------R');
        //$location.path('/wishlist/wishcreate/');
        $location.path('/wishlist/wishcreate');

//         $location.path('/wishlist');
// //     $location.path('/wishlist-create');
//


    }

    $scope.editnews = function () {
    }


    console.log('HERE IN CONTROLLER 1');
    var wishlisturl = 'http://localhost:8045/wishlistcategorys';

    $http.get(wishlisturl).then(function (data) {
        console.log('HERE IN CONTROLLER 2');

        console.log(JSON.stringify(data, null, "    "));
        $scope.wishlistchartlist = [];

        for (i in data.data) {
            $scope.wishlistchartlist.push(data.data[i]);

        }

        $scope.wishlistlist = $scope.wishlistchartlist;

    });


    $scope.updateMode = function () {

        $http.get(wishlisturl + '?category=' + $scope.selectedWishlistchartlist).then(function (data) {
            $scope.wishlistcatcode = data.data[0].code.split(',');
            $location.path('/wishlistchart');

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
