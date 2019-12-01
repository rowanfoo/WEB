
var module = angular.module('app');

module.factory('myInterceptor',INTERCEPTOR);

function INTERCEPTOR( $location) {
    var myInterceptor = {
        response: function (response) {
            console.log("------------------INTERCEPTOR---------" + response);
            console.log("------------------INTERCEPTOR---------" + response.status);
            console.log(JSON.stringify(response, null, "    "));
            if( response.status === '401'){
                $location.path('/login');
            }

            return response
        }
    };

    return myInterceptor;


}