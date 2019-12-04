var module = angular.module('app');

module.controller('wishlistcreateController', Controller);


function Controller($scope, $location, $http, submitform, $rootScope) {

//              console.log( ' SUBMIT  investigate-create    ----'+JSON.stringify(    $scope.config , null, "    ") );

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

    $scope.callback = function (value) {

        console.log('-----------------CALLBACK----------------');
        $scope.code = '';
        $scope.wishlist.category = value;
        var wishlisturl = 'http://localhost:8045/wishcategorycodes';

        $http.get(wishlisturl + '?category=' + value).then(function (data) {

            console.log(JSON.stringify(data, null, "    "));


            for (i in data.data) {
                //   console.log('----DATA-------' +  data.data[i].code);
                $scope.code = $scope.code + ',' + data.data[i].code;

            }
            $scope.code = $scope.code.substring(1, $scope.code.length);
            $scope.wishlist.code = $scope.code;

        });
    }


};
