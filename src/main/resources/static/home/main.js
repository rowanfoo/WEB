$(document).ready(function () {
    $('#example').DataTable();
});
var module = angular.module('app');

module.controller('sideNavController', Controller);


function Controller($scope, $location, $http) {
    console.log('HERE IN CONTROLLER');
    $scope.code = '';
    var counter = 0;
    $scope.notes = [];
    $scope.algos = [];

    $scope.golink = function (type, id) {
        console.log('---goto path----');
        console.log('---goto path----' + type + "---------" + id);
//        var url = 'main/viewlist/' + type + '/' + id;
        var url = '/viewlist/' + type + '/' + id;

        console.log('---goto path----' + type + "---------" + url);

        $location.path(url);
    };

    $scope.golink2 = function (type, id) {
        console.log('---goto path----' + type + "-------------" + id);
    };


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


};
