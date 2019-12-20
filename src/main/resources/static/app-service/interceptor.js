var module = angular.module('app');
module.factory('myInterceptor', INTERCEPTOR);

function INTERCEPTOR($rootScope,  $q) {
    var myInterceptor = {
        response: function (response) {
            // console.log(JSON.stringify(response, null, "    "));
            return response
        },
        responseError: function (responseError) {
            if (responseError.status === 400 || responseError.status === 401) {
                $rootScope.$emit('unauthorized', {message: "not allowed "});
            }
            return $q.reject(responseError);
        }
    };
    return myInterceptor;
}
