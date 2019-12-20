angular
    .module('app')
    .factory('Fundamental', Service);

function Service($rootScope, $http,  $q, submitform) {
    var service = {};
    service.GetFundamentalCode = getFundamentalCode;
    service.SaveFundamental = saveFundamental;
    return service;

    function getFundamentalCode(code) {
        var fundurl = $rootScope.config.fundamentalurl + "/" + code;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(fundurl).then(function (data) {
            q.resolve(data.data);
        });
        return q.promise;
    }

    function saveFundamental(category) {
        var fundurl = $rootScope.config.fundamentalurl;
        submitform.sendData('PUT', fundurl, category);
    }
}






