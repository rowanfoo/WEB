angular
    .module('app')
    .factory('CoreData', Service);

function Service($http, $localStorage) {
    var service = {};

    service.GetData = getData;
    return service;

    function getData($http, url) {
        var myurl = url
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





