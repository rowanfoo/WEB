var module = angular.module('app');
module.factory('myInterceptor', INTERCEPTOR);

function INTERCEPTOR($rootScope, $location, $q) {
    var myInterceptor = {
        response: function (response) {
            console.log("------------------INTERCEPTOR---------" + response.status);
            // console.log(JSON.stringify(response, null, "    "));
            return response
        },
        responseError: function (responseError) {
            console.log("------------------INTERCEPTOR---ERROR------" + responseError.status);
            // console.log(JSON.stringify(response, null, "    "));
            if (responseError.status === 400 || responseError.status === 401) {
//                $location.path('/login');
                console.log("------------------INTERCEPTOR----ERROR- EMIT NOW----");
                $rootScope.$emit('unauthorized', {message: "not allowed "});
            }
            return $q.reject(responseError);
        }
    };
    return myInterceptor;
}
