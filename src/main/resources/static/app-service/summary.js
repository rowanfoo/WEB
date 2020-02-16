angular
    .module('app')
    .factory('Summary', Service);

function Service($http, $rootScope, $q) {
    var service = {};
    service.GetToday = getToday;
    service.GetAllData = getAllData;
    return service;


    function getToday() {
        var serverurl = $rootScope.config.algoturl;
        var myurl = serverurl + 'summary/today';
        var seriesOptions = [];
        var mydate = [];
        var q = $q.defer();

        $http.get(myurl).then(function (data) {
            var mydata = data.data;
            q.resolve(mydata);
        });

        return q.promise;

    }


    function getAllData() {
        var serverurl = $rootScope.config.algoturl;
        var myurl = serverurl + 'summary/all';
        console.log('-----------getAllData-----url------------' + myurl);
        var q = $q.defer();

        $http.get(myurl).then(function (data) {
            var mydata = data.data;
            q.resolve(mydata);
        });

        return q.promise;
    }


}





