angular
    .module('app')
    .factory('Comment', Service);

function Service($rootScope , $http, $q) {
     var service = {};
    // service.GetAllWishCategory = getAllWishCategory;
    // service.GetWishCodes = getWishCodes;
     return service;
    // //var wishlisturl = $rootScope.config.wishurl;
    //
    // function getAllComment(code) {
    //     var wishlisturl = $rootScope.config.wishurl;
    //     console.log('---RUN-   getAllComment-----1--'+wishlisturl);
    //     wishlisturl=wishlisturl+'wishlistcategorys';
    //     var q = $q.defer();
    //     var seriesOptions = [];
    //     $http.get(wishlisturl).then(function (data) {
    //         data.data.forEach(function (value) {
    //             seriesOptions.push(value);
    //         });
    //         q.resolve(seriesOptions);
    //     });
    //     return q.promise;
    // }
    // function getAllCommentByDate(code , date) {
    //     var wishlisturl = $rootScope.config.wishurl;
    //     console.log('---RUN-   getAllComment-----1--'+wishlisturl);
    //     wishlisturl=wishlisturl+'wishlistcategorys';
    //     var q = $q.defer();
    //     var seriesOptions = [];
    //     $http.get(wishlisturl).then(function (data) {
    //         data.data.forEach(function (value) {
    //             seriesOptions.push(value);
    //         });
    //         q.resolve(seriesOptions);
    //     });
    //     return q.promise;
    // }
    //
    // function saveComment(code , comment) {
    //     var wishlisturl = $rootScope.config.wishurl;
    //     // var wishlisturl = 'http://localhost:8045/wishcategorycodes';
    //     wishlisturl=wishlisturl+'wishcategorycodes';
    //     var code = '';
    //     var q = $q.defer();
    //     $http.get(wishlisturl + '?category=' + category).then(function (data) {
    //         console.log(JSON.stringify(data, null, "    "));
    //         q.resolve(data.data[0].code);
    //     });
    //     return q.promise;
    // }


}






