var module = angular.module('app');

module.controller('loginController', CONTROLLER);

    function CONTROLLER ($scope, $http) {
        var counter = 0;
        $scope.ma = [];
        $scope.rsi = [];
        $scope.falltoday = [];


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


        $scope.show = function (elements) {
            var arrs = elements.concat($scope.rsi);

            alert(JSON.stringify(elements));
        };


        $scope.myFunc = function () {
            console.log(' submit ----work  ');
            var arrs = $scope.ma.concat($scope.rsi).concat($scope.falltoday);

            // console.log(JSON.stringify($scope.elements, null, "    "));
            console.log(JSON.stringify(arrs, null, "    "));
            // $http.put('http://localhost:8080/investigatem', $scope.elements).then(
            // $http.put('http://localhost:8090/investigatem', arrs).then(
            $http.put('http://localhost:8080/user', arrs).then(
                function (response) {
                    console.log('work  ' + response.data);
                }
            ).catch(function (response) {
                console.log('errr  ' + response.data);
            })

        };
        console.log("hello world");


        // $http.get('http://localhost:8090/items').then(function (data) {
        $http.get('http://localhost:8080/user').then(function (data) {

            var mydata = data.data;
            console.log("hello world--------" + mydata);
            console.log("hello world--------" + mydata.length);
            console.log(JSON.stringify(mydata, null, "    "));


            mydata.forEach(function (obj) {
                console.log(obj.id);
                var id = obj.id;
                if (id == 'ma') $scope.ma.push({id: obj.id, value: obj.value});
                else if (id == 'rsi') $scope.rsi.push({id: obj.id, value: obj.value});
            });
//

            if ($scope.ma.length == 0) $scope.ma = [{id: 'ma', value: ''}];
            if ($scope.rsi.length == 0) $scope.rsi = [{id: 'rsi', value: ''}];
            if ($scope.falltoday.length == 0) $scope.falltoday = [{id: 'falltoday', value: ''}];


        });


    };// eoc
