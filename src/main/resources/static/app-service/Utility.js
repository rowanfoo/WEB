angular
    .module('app')
    .factory('Utility', Service);

function Service($http) {
    var service = {};

    service.Comma = comma;
    return service;

    function comma(data) {
        var code = '';
        console.log('------------Service -----commat----- ' + data.code);
        // for (i in data.data) {
        //
        // }
        var x;
        for (x of data) {

            code = code + ',' + x;
            console.log('------------Service -----commat----- ' + code);
        }

        code = code.substring(1, code.length);
        return code;
    }
}


