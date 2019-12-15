angular
    .module('app')
    .factory('Config', Service);

function Service($rootScope, $http, $localStorage, $q, submitform) {
    var service = {};
    service.GetConfig = getConfig;
    service.Save = save;
    return service;

    //var wishlisturl = $rootScope.config.wishurl;


    function save(data) {

        var configurl = $rootScope.config.configurl;
        var configurl = "http://localhost:8080/comment/";
        console.log("----createComment ---" + configurl);


        console.log(JSON.stringify(data, null, "    "));
        submitform.sendData('PUT', configurl, data);
        console.log("----end ---");


    }

    function getConfig(type, code) {
        var configurl = $rootScope.config.configurl + type + '/' + code;
        console.log('---RUN-   getConfig-----1--' + configurl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(configurl).then(function (data) {
            //     console.log(JSON.stringify(data, null, "    "));
            data.data.forEach(function (value) {
                seriesOptions.push(value.value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }


}




