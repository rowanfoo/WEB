var module = angular.module('app');

module.controller('useralgocontroller', CONTROLLER);

function CONTROLLER($scope, $http, User, $localStorage) {
    var counter = 0;
    $scope.ma = [];
    $scope.rsi = [];
    $scope.falltoday = [];
    $scope.volumex = [];
    $scope.testuser = false;

    console.log("-----------useralgocontroller-------------");
    console.log("-----------useralgocontroller------USER-------" + $localStorage.currentUser);


    $scope.newItem = function () {
        counter++;
        $scope.ma.push({id: 'ma', value: ''});
    }


    $scope.newItem2 = function () {
        counter++;
        $scope.rsi.push({id: 'rsi', value: ''});
    }


    $scope.newItem3 = function () {
        $scope.falltoday.push({id: 'falltoday', value: ''});
    }
    $scope.newItem4 = function () {
        $scope.volumex.push({id: 'volumex', value: ''});
    }


    $scope.show = function (elements) {
        var arrs = elements.concat($scope.rsi);

        alert(JSON.stringify(elements));
    };


    $scope.myFunc = function () {
        console.log(' submit ----save user algo  ');
        var arrs = $scope.ma.concat($scope.rsi).concat($scope.falltoday).concat($scope.volumex);
        //console.log(JSON.stringify($scope.element, null, "    "));
        // console.log(JSON.stringify(arrs, null, "    "));
        // // $http.put('http://localhost:8080/investigatem', $scope.elements).then(
        // // $http.put('http://localhost:8090/investigatem', arrs).then(
        // $http.put('http://localhost:8080/user', arrs).then(
        //     function (response) {
        //         console.log('work  ' + response.data);
        //     }
        // ).catch(function (response) {
        //     console.log('errr  ' + response.data);
        // })
        //

        User.SaveUserAlgo(arrs);

    };

    // $http.get('http://localhost:8090/items').then(function (data) {
    // $http.get('http://localhost:8080/user').then(function (data) {
    User.GetUserAlgo($localStorage.currentUser).then(function (data) {
        console.log(JSON.stringify(data, null, "    "));
        // var mydata = data.data;
        var mydata = data;
        console.log("hello world--------" + mydata);
        console.log("hello world--------" + mydata.length);


        mydata.forEach(function (obj) {
            console.log(obj.id);
            var id = obj.id;
            if (id == 'ma') $scope.ma.push({id: obj.id, value: obj.value});
            else if (id == 'rsi') $scope.rsi.push({id: obj.id, value: obj.value});
            else if (id == 'volumex') $scope.volumex.push({id: obj.id, value: obj.value});
            else if (id == 'falldaily') $scope.falltoday.push({id: obj.id, value: obj.value});
        });
//

        if ($scope.ma.length == 0) $scope.ma = [{id: 'ma', value: ''}];
        if ($scope.rsi.length == 0) $scope.rsi = [{id: 'rsi', value: ''}];
        if ($scope.falltoday.length == 0) $scope.falltoday = [{id: 'falldaily', value: ''}];
        if ($scope.volumex.length == 0) $scope.volumex = [{id: 'volumex', value: ''}];

    });


};// eoc
