angular
    .module('app')
    .factory('Config', Service);

function Service($rootScope, $http, $q, submitform) {
    var service = {};
    service.GetConfig = getConfig;
    service.Save = save;
    return service;

    function save(data) {
        var configurl = $rootScope.config.configurl;
        var configurl = "http://localhost:8080/comment/";
//        console.log(JSON.stringify(data, null, "    "));
        submitform.sendData('PUT', configurl, data);
    }

    function getConfig(type, code) {
        var configurl = $rootScope.config.configurl + type + '/' + code;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(configurl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value.value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }
}




