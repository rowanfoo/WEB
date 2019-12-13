angular
    .module('app')
    .factory('CoreData', Service);

function Service($http,$rootScope, $localStorage) {
    var service = {};

    service.GetData = getData;
    return service;
    function getData(date, code) {
        console.log('-------getData------------' );
        var serverurl = $rootScope.config.algoturl;
        //    function getData($http, url) {
//        http://rowanfoo.ddns.net:10100/dategt?date=2019-01-01&code=ABC.AX
        var codeurl = serverurl + 'dategt?'+'date='+ date+'&code=' + code;
        console.log('-------codueurl------------' + codeurl);

        var myurl = codeurl
        var seriesOptions = [];
        var mydate = [];
        console.log("START-----getData : ");


        return new Promise(function (resolve, reject) {
            console.log("START-----getData 1 : ");
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


                console.log('------------DONE--getData---------- ');
                resolve(seriesOptions);
                console.log('-------------RETURN---getData--------- ');
            });
            console.log('-------------DONE---getData--------- ');
        });


        console.log('-------------RETURN---------- ');

    }
}





