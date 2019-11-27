$(document).ready(function () {
    $('#example').DataTable();
});

var module = angular.module('app', ['ngMaterial', 'ngRoute', 'ngStorage']);

module.config(function ($routeProvider) {

    $routeProvider.when('/worker/:type/:id/', {
        templateUrl: '/webserver/newwork/static/list/view.html',
        controller: 'loginController'

    }).when('/login/', {
        templateUrl: '/webserver/newwork/static/login/login.html',
        controller: 'loginController'
    });

});

module.run(function ($rootScope, $http, $location, $localStorage) {
    // if ($localStorage.currentUser) {
    //     $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    // }
    console.log('---RUN----------------');
    console.log('---RUN----------------' + $localStorage.currentUser);
    if (typeof $localStorage.currentUser == 'undefined') {
        console.log('---RUN-   IF---------------');
        $location.path('/login');
        console.log('---RUN-   DONE---------------');
    }

    // redirect to login page if not logged in and trying to access a restricted page

});


module.controller('sideNavController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    console.log('HERE IN CONTROLLER');
    $scope.code = '';
    var counter = 0;
    $scope.notes = [];
    $scope.algos = [];

    $scope.golink = function (type, id) {
        console.log('---goto path----');
        console.log('---goto path----' + type + "---------" + id);
        var url = '/worker/' + type + '/' + id;
        console.log('---goto path----' + type + "---------" + url);

        $location.path(url);
    }

    $scope.golink2 = function (type, id) {
        console.log('---goto path----' + type + "-------------" + id);
    }


    $http.get('http://localhost:8090/items').then(function (data) {
        var mydata = data.data;
        console.log("hello world--------" + mydata);
        console.log("hello world--------" + mydata.length);
        console.log(JSON.stringify(mydata, null, "    "));

        mydata.forEach(function (obj) {
            console.log(obj.id);
            $scope.algos.push({id: obj.id, value: obj.value});
        });


    });


}]);

module.controller('loginController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    console.log('-----------HERE IN CONTROLLER----------loginController-');

    var type = $routeParams.type;
    var id = $routeParams.id;

    console.log('-----------HERE IN CONTROLLER-----------' + type + '----------' + id);

    $http.get('http://localhost:8080/' + type + '/' + id + '?sector=200').then(function (data) {
        // $http.get('http://192.168.0.10:10500/' + type).then(function (data) {
        console.log(JSON.stringify(data, null, "    "))
        $scope.data = data.data

    });


}]);


