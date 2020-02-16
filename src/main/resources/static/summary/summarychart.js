var module = angular.module('app');

module.controller('summaryChartController', CONTROLLER);

function CONTROLLER($scope, $state, $http, Summary, HIGHCHARTSIMPLE) {
    console.log('-----------------summaryChartRsiController------------------------`11----------');
    var type = $state.params.type;
    console.log('-----------------summaryChartRsiController-------------------type-------' + type);
    Summary.GetAllData().then(function (data) {
        //  console.log(JSON.stringify(data, null, "    "));

        var seriesOptions = [];
        var seriesOptions2 = [];
        data.forEach(function (value) {

            // var date = new Date(value.date);
            // var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
            //     date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            // var dateutc = new Date(now_utc);
            var selectdata;
            if (type === 'rsi') {
                console.log('-----------------summaryChartRsiController-------------------down-------');

                selectdata = value.rsi;

            }
            if (type === 'up') {
                console.log('-----------------summaryChartRsiController-------------------up-------');
                selectdata = value.up;

            }
            // if (type = 'down') {
            //     selectdata = value.down;
            //
            // }

            if (type === 'fourdown') {
                console.log('-----------------summaryChartRsiController-------------------fourdown-------');
                selectdata = value.fourdown;

            }
            if (type === 'ratiodown') {
                console.log('-----------------summaryChartRsiController-------------------ratiodown-------');
                selectdata = value.ratiodown;

            }

            seriesOptions.push([
                // new Date(value.date).toISOString(), // the date
                // new Date(value.date.getUTCFullYear(), value.date.getUTCMonth(), value.date.getUTCDay()), // the date
                new Date(value.date).getTime(), // the date
                // dateutc,
                selectdata
            ]);

            if (type === 'up') {
                console.log('-----------------summaryChartRsiController-------------------push down-------');
                seriesOptions2.push([
                    // new Date(value.date).toISOString(), // the date
                    // new Date(value.date.getUTCFullYear(), value.date.getUTCMonth(), value.date.getUTCDay()), // the date
                    new Date(value.date).getTime(), // the date
                    // dateutc,
                    value.down
                ]);

            }

            ///////////


            // seriesOptions.forEach(function (value) {
            //     console.log('-----------------data-------------' + value);
            // });


        });
        var series = [];
        if (type !== 'up') {
            console.log('-----------------summaryChartRsiController-----------------series NORMAL-------');
            series.push(utilCreateSeries(type, "column", seriesOptions));
            seriesOptions.forEach(function (value) {

                if (value[1] > 200) {
                    console.log('-----------------data-------------' + value);

                }

            });

        }

        // console.log(JSON.stringify(att, null, "    "));

        if (type === 'up') {
            console.log('-----------------summaryChartRsiController-----------------series DOWN-------');
            series.push(utilCreateSeries("up", "column", seriesOptions));
            series.push(utilCreateSeries("down", "column", seriesOptions2));
        }


        HIGHCHARTSIMPLE.CreateChart(series, "container");
    });

};// eoc






