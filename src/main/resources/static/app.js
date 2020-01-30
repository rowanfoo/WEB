var module = angular.module('app', ['ngMaterial', 'ui.router', 'ngStorage', 'angular-jwt', 'datatables']);

module.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // $mdIconProvider.defaultIconSet('img/icons/sets/core-icons.svg', 24);
    $httpProvider.interceptors.push('myInterceptor');

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
        .state('main.viewdetail', {
            url: '/viewdetail/:code',
            views: {
                "content": {
                    templateUrl: '/WEB/static/list/detail/detail.html',
                    controller: 'viewDetailController'
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
        .state('main.multichart', {
            url: '/multichart/:code',
            views: {
                "content": {
                    templateUrl: '/WEB/static/chart/multichart.html',
                    controller: 'multichartController'
                }
            }
        })
        .state('main.listchart', {
            url: '/listchart/:code',
            views: {
                "list": {
                    templateUrl: '/WEB/static/chart/listchart.html',
                    controller: 'listchartController'
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
        })
        .state('wishmain.wishchart', {
            url: '/wishchart',
            views: {
                "content": {
                    templateUrl: '/WEB/static/chart/chart.html',
                    controller: 'intervalController'
                }
            }
        })
        .state('wishmain.wishdetail', {
            url: '/wishdetail/:codes',
            views: {
                "content": {
                    templateUrl: '/WEB/static/wishlist/detail/view.html',
                    controller: 'wishlistDetailController'
                }
            }
        })
        .state('useralgo', {
            url: '/useralgo',
            templateUrl: ' /WEB/static/user/useralgo.html',
            controller: 'useralgocontroller'
        })
        .state('newsmain', {
            url: '/news',
            templateUrl: ' /WEB/static/news/news.html',
            controller: 'newsController'
        })
        .state('category', {
            url: '/category',
            templateUrl: '/WEB/static/category/main.html',
            controller: 'categoryController'
        })
        .state('category.detail', {
            url: '/detail',
            views: {
                "content": {
                    templateUrl: '/WEB/static/category/detail.html',
                    controller: 'categoryDetailController'
                }
            }
        })
        .state('category.tags', {
            url: '/categorydetail/:codes',
            views: {
                "detail": {
                    templateUrl: '/WEB/static/wishlist/detail/view.html',
                    controller: 'wishlistDetailController'
                }
            }
        });
});

module.run(function ($rootScope, $http, $location, $localStorage) {
    setconfig($rootScope);

    var ss = moment().subtract('year', 2).format('YYYY-MM-DD').toString();
    console.log("--------mydate---------" + ss);
    // if ($localStorage.currentUser) {
    //     $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    // }
//     if (typeof $localStorage.currentUser == 'undefined' || $localStorage.currentUser == null) {
//         console.log('---RUN-   IF---------------');
//         $location.path('/login');
//         console.log('---RUN-   DONE---------------');
//     }
    //$location.path("/viewchart");
//    console.log('---ROUTE------------1----');
    //$location.path('/login');
    //$location.path('/news');
//    $location.path('/wishlist');
//    $location.path('/wishlist/wishcreate');
//     $location.path('/wishlist-create');

      $location.path('/main');
    //  $location.path('/category');

//    $location.path('/main/listchart/BHP.AX,RIO.AX');

//    $location.path('/listchart/BHP.AX,RIO.AX');

    //  console.log('---ROUTE-  DEADD---------------');
    $rootScope.$on("unauthorized", function (event, next) {
        console.log('---NOT ALLOWED TO ENTER----------');
        console.log('---NOT ALLOWED TO ENTER----------' + next);
        $location.path('/login');

    });
});
