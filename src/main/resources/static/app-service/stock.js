angular
    .module('app')
    .factory('Stock', Service);

function Service($rootScope, $http, $q) {
    var service = {};
    service.GetAllCodes = getAllCodes;

    return service;

    function getAllCodes() {
        var serverurl = $rootScope.config.algoturl+ 'stocks';
        console.log('-----------getAllCodes-----url------------' + serverurl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(serverurl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }



}






