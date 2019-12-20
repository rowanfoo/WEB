angular
    .module('app')
    .factory('CoreData', Service);

function Service($http, $rootScope) {
    var service = {};
    service.GetData = getData;
    return service;

    function getData(date, code) {
        var serverurl = $rootScope.config.algoturl;
        var codeurl = serverurl + 'dategt?' + 'date=' + date + '&code=' + code;
        var myurl = codeurl
        var seriesOptions = [];
        var mydate = [];
        return new Promise(function (resolve, reject) {
            $http.get(myurl).then(function (data) {
                // console.log(JSON.stringify(data, null, "    "));
                data.data.forEach(function (value) {
                    seriesOptions.push([
                        new Date(value.date).getTime(), // the date
                        value.open, // open
                        value.high, // high
                        value.low, // low
                        value.close// close
                    ]);
                });
                resolve(seriesOptions);
            });
        });
    }
}





