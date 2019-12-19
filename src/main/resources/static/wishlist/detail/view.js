var module = angular.module('app');
module.controller('wishlistDetailController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, WishList) {

    console.log('----------wishlistDetailController -HERE IN CONTROLLER----------viewController---v1');
    $scope.loading = true;
    // var type = $routeParams.type;
    // var id = $routeParams.id;
    var codes = $state.params.codes;
    console.log('----------viewController -HERE IN CONTROLLER----------CODES-' + codes);
    WishList.GetWishDetails(codes).then(function (data) {
        $scope.data = data;
        $scope.loading = false;
    })
    // console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);


};