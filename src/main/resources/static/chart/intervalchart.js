var module = angular.module('app');
module.controller('intervalController', Controller);


function Controller($scope, $rootScope, $http, $interval, CoreData, HIGHCHART) {

    console.log('-----------HERE IN mychartController CONTROLLER-----------');

    var rsicode = $rootScope.algoscope;
    // rsicode = [];
    // rsicode.push('BHP.AX');
    // rsicode.push('RIO.AX');
    // rsicode.push('FMG.AX');

    console.log('-----------HERE IN mychartController CONTROLLER-----------' + rsicode);

    // var rsicode = [];
    // var rsivalue = [];
    // var serverurl = "http://localhost:8080/";
    // var url2 = serverurl + type;
    // $http.get(url2).then(function (data1) {
    //     data1.data.forEach(function (value) {
    //         console.log('------------RSICODE------------ ' + value.code);
    //         rsicode.push(value.code);
    //         rsivalue.push(value.message)
    //     });
    //     console.log('------------RSICODE XX------------ ' + rsicode);
    var serverurl = "http://localhost:8080/";
    var counter = 0;
    callAtInterval();
    var myinterval = $interval(callAtInterval, 15000);
    // });


    //var rsicode = [];

    function callAtInterval() {
//        console.log('------INTERVAL---ALL----CODE--------- ' + rsicode);
//        console.log('------INTERVAL---ALL----CODE--------- ' + rsicode[0]);
        if (counter > rsicode.length) $interval.cancel(myinterval);
        var code = rsicode[counter];
        $scope.mycode = code;
        counter++;
        console.log('------INTERVAL---ALL----INDEX-xx-------- ' + counter);
        console.log('------INTERVAL---ALL----CODE--xx------- ' + code);

        $scope.code = code;
        //    $scope.message = rsivalue[counter++];
        var intervalurl = serverurl + "/dategt?date=2019-01-01&code=" + code;

        console.log('------INTERVAL-------HTTP--------- ' + intervalurl);


        CoreData.GetData($http, intervalurl).then(function (value) {
            console.log('------GetData-------HTTP----XXXXX----- ');
            // console.log('------GetData-------HTTP----hhh----- ' + value);
            // console.log(JSON.stringify(value, null, "    "))
            HIGHCHART.CreateChart(value, "container");
//            createChart(value, "container");

        });

        // getData($http, intervalurl).then(function (value) {
        //     createChart(value, "container");
        // });


    };

}

// ;
