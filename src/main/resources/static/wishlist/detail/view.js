var module = angular.module('app');
module.controller('wishlistDetailController', Controller);


function Controller($scope, $rootScope, $http, $state, $location, WishList) {

    console.log('----------wishlistDetailController -HERE IN CONTROLLER----------viewController---v1');
    $scope.loading = true;
    // var type = $routeParams.type;
    // var id = $routeParams.id;
    var codes = $state.params.codes;

    WishList.GetWishDetails(codes).then(function (data) {
        $scope.data = data;
        $scope.loading = false;
    })
    // console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);

    // $scope.dataTableOpt = {
    //     //custom datatable options
    //     // or load data through ajax call also
    //     "aLengthMenu": [[20, 50, 100, -1], [20, 50, 100, 'All']],
    // };
};