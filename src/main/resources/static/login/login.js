var module = angular.module('app');

module.controller('loginController', CONTROLLER);

function CONTROLLER($scope, $rootScope, $http, $localStorage, $location, jwtHelper, AuthenticationService) {
    $scope.loginin = function () {
        // var encodedCredentials = btoa("client:client");
        // var basicHeader = "Basic " + encodedCredentials;
        // var headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Authorization': basicHeader
        // };
        console.log('  ----LOGIN IN NOW  ');
        $scope.loading = true;
        console.log('  ----token 2 ' + $scope.username);
        console.log('  ----token 2 ' + $scope.password);
        $location.path('/main');
        // AuthenticationService.Login($scope.username, $scope.password, onSuccess, onFail);
        // var body = "grant_type=password&username=rowan&password=rowan";
        //
        // var s = "grant_type=password&username={0}&password={1}";
        //  s = s.replace('{0}',  $scope.username);
        //  s = s.replace('{1}', $scope.password);
        //
        // console.log('  ----send form  ' + s);


        // $http.post('http://localhost:8080/oauth/token', body,
        //     {
        //         headers: headers
        //     })
        //     .then(onSuccess, onFail)


    };

    function onSuccess(data) {
        console.log('  ----token 2 ' + data.data.access_token);
        console.log('  ----token 2 token ' + jwtHelper.decodeToken(data.data.access_token));
        console.log(JSON.stringify(jwtHelper.decodeToken(data.data.access_token), null, "    "));
        console.log('  ----token 3 ' + jwtHelper.decodeToken(data.data.access_token).user_name);
        console.log('  ----token 3 ' + jwtHelper.getTokenExpirationDate(data.data.access_token));
        console.log('  ----token 3 ' + jwtHelper.isTokenExpired(data.data.access_token));
        $localStorage.currentUser = jwtHelper.decodeToken(data.data.access_token).user_name;
        $http.defaults.headers.common.Authorization = 'Bearer ' + data.data.access_token;
        $scope.loading = false;
        // $rootScope.$broadcast('$locationChangeStart', $scope.name)
        $location.path('/main');

    };

    function onFail(data) {
        console.log('  ----FAIL  ' + data);
        $scope.loading = false;
    };


};