angular.module('app').component('wishlistcat', {
    templateUrl: '/WEB/static/app-component/autocompletewishlistcat.html',
    bindings: {selectedcode: '<'},
    controller: ['$scope', '$rootScope', 'WishList', function ($scope, $rootScope, WishList) {
        console.log('-----------COMPONENT-----wishlistcat------------');
        WishList.GetAllWishCategory().then(function (value) {
            $scope.codes = value;
            console.log(JSON.stringify($scope.codes, null, "    "));

        });

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