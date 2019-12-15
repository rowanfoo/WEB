var app = angular.module('app');
app.service('submitform', ['$http', function ($http) {
    console.log('submit  inside submit');

    this.sendData = function (method, url, data) {
        if (method == 'PUT') {
            console.log(' SUBMIT  PUT    ----' + JSON.stringify(data, null, "    "));

            $http.put(url, data).then(
                function (response) {
                    console.log('PUT' + response.data);
                    $mdDialog.hide();
                }
            ).catch(function (response) {
                console.log(' POST errr  ' + response.data);
            })


        } else if (method == 'POST') {
            console.log(' SUBMIT  investigate-create    ----' + JSON.stringify(data, null, "    "));
            $http.post(url, data).then(
                function (response) {
                    console.log('POST  ' + response.data);
                    $mdDialog.hide();
                }
            ).catch(function (response) {
                console.log(' POSTerrr  ' + response.data);
            })

        } else if (method == 'DELETE') {

        }
        console.log('done submit');
    }
}]);
