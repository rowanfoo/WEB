angular
    .module('app')
    .factory('Category', Service);

function Service($rootScope, $http, $q) {
    var service = {};
    service.GetAllCategory = getAllCategory;
    service.GetAllCategoryTag = getAllCategoryTag;
    service.GetCategoryTagStocks = getCategoryTagStocks;

    return service;

    function getAllCategory() {
        var categoryurl = $rootScope.config.categoryurl;
        console.log('---RUN-   getAllCategory-----1--' + categoryurl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(categoryurl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }

    function getAllCategoryTag(tag) {
        var categoryurl = $rootScope.config.categoryurl + '/tag/' + tag;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(categoryurl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }


    function getCategoryTagStocks(category, tag) {
        var categoryurl = $rootScope.config.categoryurl + '/stock/category/' + category + '/tag/' + tag;
        console.log('---RUN-   getCategoryTagStocks-----1--' + categoryurl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(categoryurl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }


}


// angular
//     .module('app')
//     .factory('Category', Service);
//
// function Service($rootScope, $http, $q) {
//     var service = {};
//     service.GetAllCategory = getAllCategory;
//     return service;
//
//     function getAllCategory() {
//         var categoryurl = $rootScope.config.categoryurl;
//         console.log('---RUN-   getAllCategory-----1--' + categoryurl);
//         var q = $q.defer();
//         var seriesOptions = [];
//         $http.get(categoryurl).then(function (data) {
//             data.data.forEach(function (value) {
//                 seriesOptions.push(value);
//             });
//             q.resolve(seriesOptions);
//         });
//         return q.promise;
//     }
//
//
// }


