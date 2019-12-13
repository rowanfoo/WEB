angular
    .module('app')
    .factory('AuthenticationService', Service);

function Service($http,$rootScope, $localStorage) {
    var service = {};
    service.Login = Login;
    service.Logout = Logout;
    return service;

    function Login(username, password, onSuccess, onFail) {
        var encodedCredentials = btoa("client:client");
        var basicHeader = "Basic " + encodedCredentials;
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        };

        var body = "grant_type=password&username={0}&password={1}";
        body = body.replace('{0}', username);
        body = body.replace('{1}', password);
        console.log('  ----send form  ' + body);
        var oauthurl = $rootScope.config.oauthurl;

        $http.post(oauthurl+'oauth/token', body,
            {
                headers: headers
            })
            .then(onSuccess, onFail)

    };
}

function Logout() {
    // remove user from local storage and clear http auth header
    delete $localStorage.currentUser;
    $http.defaults.headers.common.Authorization = '';
}
