var module = angular.module('app');

module.controller('wishlistcreateController', Controller);


//function Controller($scope, $location, $http, submitform, $rootScope, WishList, Utility) {
function Controller($scope, $location, $http, submitform, $rootScope, WishList) {

    console.log(" -----------------STUDENT CONTROLLER-----------");

    $scope.wishlist = {
        code: '',
        category: ''
    };

    $scope.createstock = function () {
        // var wishlisturl = 'http://localhost:8045/';
        var wishlisturl = $rootScope.config.wishurl;
        console.log("----createstock ---");

        if ($scope.wishlist.category == '') {
            $scope.wishlist.category = $rootScope.selectcode;
        }

        console.log(JSON.stringify($scope.wishlist, null, "    "));
        submitform.sendData('PUT', wishlisturl + '/wishlist/', $scope.wishlist).then(function (data) {
                $scope.error = "";
            },
            function (err) {

                //               console.log("----error ---" + err);
//                console.log(JSON.stringify(err, null, "    "));
                console.log("----error ---" + err.data.code);
                $scope.error = "these codes doesnt exists in database yet:" + err.data.code;
            });
        console.log("----end ---");


        // , function (err) {
        //         $scope.loading = false;
        //         console.log("------------------wishlistController------WISHLIST--------ERRR---------------------");
        //         console.log(JSON.stringify(err, null, "    "));
        //         $scope.error = "you are wrong ";
        //
        //     }
        //
        //
    };

    $scope.callback = function (selectedcategory) {

        WishList.GetWishCodes(selectedcategory).then(function (value) {
            console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------***12*');
            $scope.wishlist.category = selectedcategory;
            $scope.wishlist.code = value;
        });


    }


};



