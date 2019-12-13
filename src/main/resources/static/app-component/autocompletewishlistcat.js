//templateUrl: '/wishlistview/resources/wishlistview/route//wishlistcreate.html',
angular.module('app').component('wishlistcat', {
    templateUrl: '/WEB/static/app-component/autocompletewishlistcat.html',
    bindings: {selectedcode: '<'},
    controller: ['$scope', '$http', '$rootScope', 'WishList', function ($scope, $http, $rootScope, WishList) {
        console.log('-----------------COMPONENT wishlistcat---------------');

        WishList.GetAllWishCategory().then(function (value) {
            console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------****');
            $scope.codes = value;
        });
        // console.log(JSON.stringify($scope.codes, null, "    "));
        $scope.filterItems = function (searchWord) {
            $rootScope.selectcode = searchWord;
            var arr = [];
            $scope.codes.forEach(function (item) {
                arr.push(item);
            });
            return arr;
        };

        $scope.selectedItemChange = function (item) {
            $scope.mycode = item.code;
            $scope.selectedcode($scope.mycode);
        }
    }]//eof contrl
});