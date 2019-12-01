angular
    .module('app')
    .factory('AuthenticationService', Service);

function Service($http, $localStorage) {
    var service = {};

    service.Login = Login;
    service.Logout = Logout;

    return service;

    function Login(username, password, onSuccess , onFail) {
        var encodedCredentials = btoa("client:client");
        var basicHeader = "Basic " + encodedCredentials;
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        };

        var body = "grant_type=password&username={0}&password={1}";
        body = body.replace('{0}',  username);
        body = body.replace('{1}', password);
         console.log('  ----send form  ' + body);

        $http.post('http://localhost:8080/oauth/token', body,
            {
                headers: headers
            })
            .then(onSuccess, onFail)

    };



        // $http.post('/api/authenticate',body)
        //     .then(   )
            // .success(function (response) {
            //     // login successful if there's a token in the response
            //     if (response.token) {
            //         // store username and token in local storage to keep user logged in between page refreshes
            //         $localStorage.currentUser = { username: username, token: response.token };
            //
            //         // add jwt token to auth header for all requests made by the $http service
            //         $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
            //
            //         // execute callback with true to indicate successful login
            //         callback(true);
            //     } else {
            //         // execute callback with false to indicate failed login
            //         callback(false);
            //     }
            // });
    }

    function Logout() {
        // remove user from local storage and clear http auth header
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
    }
