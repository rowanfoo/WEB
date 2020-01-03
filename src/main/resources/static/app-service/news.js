angular
    .module('app')
    .factory('News', Service);

function Service($rootScope, $http, $q) {
    var service = {};
    service.GetNewsCode = getNewsCode;

    return service;

    function getNewsCode(code) {
        var serverurl = $rootScope.config.newsurl + '/code/' + code;
        console.log('-----------getNewsCode-----url------------' + serverurl);
        var q = $q.defer();

        $http.get(serverurl).then(function (data) {
            var mydata = data.data;

            q.resolve(mydata);
        });
        return q.promise;
    }


}






