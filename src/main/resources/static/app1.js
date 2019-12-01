var module = angular.module('app', ['ngMaterial', 'ui.router', 'ngStorage', 'angular-jwt']);


module.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                "content": {
                    templateUrl: '/webserver/newwork/static/login/login.html',
                    controller: 'loginController'
                }
            }

        })
        .state('main', {
            url: '/main',
            views: {
                "sidebar": {
                    templateUrl: '/webserver/newwork/static/home/main1.html',
                    controller: 'sideNavController'
                }
            }

        })
        .state('viewlist', {
            url: '/viewlist/:type/:id',
            views: {
                "content": {
                    templateUrl: '/webserver/newwork/static/list/view.html',
                    controller: 'viewController'
                },
                "sidebar": {
                    templateUrl: '/webserver/newwork/static/home/main1.html',
                    controller: 'sideNavController'
                }
            }

        });


});


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
    console.log('---ROUTE----------------');
    $location.path('/login');
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




