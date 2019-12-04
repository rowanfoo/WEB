var module = angular.module('app');

module.controller('wishlistcreateController', Controller);


function Controller($scope, $location, $http, submitform, $rootScope, WishList) {

    console.log(" -----------------STUDENT CONTROLLER-----------");

    $scope.wishlist = {
        code: '',
        category: ''
    };

    $scope.createstock = function () {
        var wishlisturl = 'http://localhost:8045/';
        console.log("----createstock ---");

        if ($scope.wishlist.category == '') {
            $scope.wishlist.category = $rootScope.selectcode;
        }

        console.log(JSON.stringify($scope.wishlist, null, "    "));
        submitform.sendData('PUT', wishlisturl + '/wishlist/', $scope.wishlist);
        console.log("----end ---");
    };

    $scope.callback = function (selectedcategory) {

        WishList.GetWishCodes(selectedcategory).then(function (value) {
            console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------***12*');
            $scope.wishlist.code = value;
        });

    }


};
