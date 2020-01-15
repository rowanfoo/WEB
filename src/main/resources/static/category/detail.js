var module = angular.module('app');
module.controller('categoryDetailController', Controller);


//function Controller($scope, $rootScope, $http, $state, $location, Category) {
function Controller($scope, $rootScope, $http, $state, $location, Category) {

    console.log('----------categoryDetailController -HERE IN CONTROLLER----3------viewController---v1');
    // $scope.loading = true;
    // // var type = $routeParams.type;
    // // var id = $routeParams.id;
    // var codes = $state.params.codes;
    // console.log('----------viewController -HERE IN CONTROLLER----------CODES-' + codes);
    // WishList.GetWishDetails(codes).then(function (data) {
    //     $scope.data = data;
    //     $scope.loading = false;
    // })
    // console.log('-----------HERE INviewController  CONTROLLER-----------' + type + '----------' + id);

    Category.GetAllCategory().then(function (data) {
        console.log(JSON.stringify(data, null, "    "));
        $scope.category = data;
        //     $scope.loading = false;
    })


    $scope.updateMode=function () {
        console.log("----------SELECt cATEGORy-------"+ $scope.selectcategory);

        Category.GetAllCategoryTag( $scope.selectcategory).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            $scope.tags = data;
            //     $scope.loading = false;
        })

    }
    $scope.myFunc=function () {
        console.log('---c---xx---'+ $scope.selectcategory);
        console.log('---c---xx---'+ $scope.selecttags);


    }

};