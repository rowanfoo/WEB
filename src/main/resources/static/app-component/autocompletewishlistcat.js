//templateUrl: '/wishlistview/resources/wishlistview/route//wishlistcreate.html',
angular.module('app').component('wishlistcat', {
    templateUrl: '/WEB/static/app-component/autocompletewishlistcat.html',
    bindings: {selectedcode: '<'},
    controller: ['$scope', '$http', '$rootScope', 'WishList', function ($scope, $http, $rootScope, WishList) {
        console.log('-----------------COMPONENT wishlistcat---------------');
        //  console.log('-----------------IN APP CONTRL 6----------------' + $rootScope.config.wishcategory);
        //rootScope.stockallrest
        var wishlisturl = 'http://localhost:8045/wishlistcategorys';

        // $http.get(wishlisturl).then(function (data) {
        //     console.log(JSON.stringify(data, null, "    "));
        //
        //     $scope.codes = [];
        //     for (i in data.data) {
        //         console.log('----DATA-------' + data.data[i]);
        //         $scope.codes.push(data.data[i]);
        //     }
        // });


        // $scope.codes = WishList.GetAllWishCategory();
        // WishList.GetAllWishCategory().then(function (value) {
        //     console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------****');
        //     //    $scope.codes = value;
        // });
        WishList.GetAllWishCategory().then(function (value) {
            console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------****');
            $scope.codes = value;
        });


        console.log(JSON.stringify($scope.codes, null, "    "));

        $scope.filterItems = function (searchWord) {
            console.log('-----------------filterItems----------------' + searchWord);
            $rootScope.selectcode = searchWord;
            var arr = [];
            $scope.codes.forEach(function (item) {
                // if (item.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0  ){
                //     arr.push(item);
                // }
                //
                arr.push(item);
            });


            return arr;
        };

        $scope.selectedItemChange = function (item) {
            console.log(' SUBMIT  investigate-create  selectedItem   ----' + item);
            $scope.mycode = item.code;
            console.log(' SUBMIT  investigate-create  selectedItem   ----' + $scope.mycode);
            $scope.selectedcode($scope.mycode);

        }

    }]//eof contrl


});