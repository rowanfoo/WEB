//var module = angular.module('app', ['ngMaterial', 'ngRoute', 'ngStorage', 'angular-jwt']);
var module = angular.module('app', ['ngMaterial', 'ui.router', 'ngStorage', 'angular-jwt']);

module.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/WEB/static/login/login.html',
            controller: 'loginController'

        })
        .state('main', {
            url: '/main',
            templateUrl: '/WEB/static/home/main.html',
            controller: 'sideNavController'

        })
        .state('main.viewlist', {
            url: '/viewlist/:type/:id',
            views: {
                "content": {
                    templateUrl: '/WEB/static/list/view.html',
                    controller: 'viewController'
                }
            }
        })
        .state('main.viewchart', {
            url: '/viewchart',
            views: {
                "content": {
                    templateUrl: '/WEB/static/chart/chart.html',
                    controller: 'intervalController'
                }

            }


        })
        .state('wishmain', {
            url: '/wishlist',
            templateUrl: '/WEB/static/wishlist/main.html',
            controller: 'wishlistController'


        })
        .state('wishmain.create', {
            url: '/wishcreate',
            views: {
                "content": {
                    templateUrl: '/WEB/static/wishlist/wishlistcreate/wishlistcreate.html',
                    controller: 'wishlistcreateController'
                }

            }


        });

    // .state('wishlistmain-1', {
    //     url: '/wishlist-create',
    //     templateUrl: '/WEB/static/wishlist/wishlistcreate/wishlistcreate.html',
    //     controller: 'wishlistcreateController'
    //
    //
    // });
    // .state('viewchart', {
    //     url: '/viewchart',
    //     templateUrl: '/WEB/static/chart/chart.html',
    //     controller: 'intervalController'
    // });

});
// $location.path("main/viewchart");
// var url = 'main/viewlist/' + type + '/' + id;

module.run(function ($rootScope, $http, $location, $localStorage) {
    // if ($localStorage.currentUser) {
    //     $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    // }
    console.log('---RUN--------4------');
    console.log('---RUN----------------' + $localStorage.currentUser);
//     if (typeof $localStorage.currentUser == 'undefined' || $localStorage.currentUser == null) {
//         console.log('---RUN-   IF---------------');
//         $location.path('/login');
//         console.log('---RUN-   DONE---------------');
//     }
    //$location.path("/viewchart");
    console.log('---ROUTE------------1----');
    //$location.path('/login');
    $location.path('/wishlist');
//    $location.path('/wishlist/wishcreate');
//     $location.path('/wishlist-create');

//    $location.path('/main');

    console.log('---ROUTE-  DEADD---------------');

    //
    //   $location.path('/main');
    // redirect to login page if not logged in and trying to access a restricted page


});

// module.controller('mainController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
//     $scope.newItem = function () {
//         console.log('---START ROUTE----------------');
//         $location.path('/viewlist');
//     }
//
// }]);

// module.controller('sideNavController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
//     console.log('HERE IN CONTROLLER');
//     $scope.code = '';
//     var counter = 0;
//     $scope.notes = [];
//     $scope.algos = [];
//
//     $scope.golink = function (type, id) {
//         console.log('---goto path----');
//         console.log('---goto path----' + type + "---------" + id);
//         var url = '/worker/' + type + '/' + id;
//         console.log('---goto path----' + type + "---------" + url);
//
//         $location.path(url);
//     };
//
//     $scope.golink2 = function (type, id) {
//         console.log('---goto path----' + type + "-------------" + id);
//     };
//
//
//     $http.get('http://localhost:8090/items').then(function (data) {
//         var mydata = data.data;
//         console.log("hello world--------" + mydata);
//         console.log("hello world--------" + mydata.length);
//         console.log(JSON.stringify(mydata, null, "    "));
//
//         mydata.forEach(function (obj) {
//             console.log(obj.id);
//             $scope.algos.push({id: obj.id, value: obj.value});
//         });
//
//
//     });
//
//
// }]);




