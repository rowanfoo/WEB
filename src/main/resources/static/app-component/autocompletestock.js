angular.module('app').component('stockcomponent', {
    templateUrl: '/WEB/static/app-component/autocompletestock.html',
    bindings: {selectedcode: '<'},
    controller: ['$scope', '$rootScope', 'Stock', function ($scope, $rootScope, Stock) {
        console.log('-----------COMPONENT-----stockcomponent------------');
        Stock.GetAllCodes().then(function (value) {
            $scope.codes = value;
            console.log(JSON.stringify($scope.codes, null, "    "));

        });

        $scope.filterItems = function (searchWord) {
            $rootScope.selectcode = searchWord;
            var arr = [];
            $scope.codes.forEach(function (item) {
                arr.push(item);
            });
            return arr;
        };

        $scope.selectedItemChange = function (item) {
            $scope.mycode = item.code;
            $scope.selectedcode($scope.mycode);
        }
    }]//eof contrl
});