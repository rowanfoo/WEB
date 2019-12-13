angular
    .module('app')
    .factory('WishList', Service);

function Service($rootScope , $http, $localStorage, $q) {
    var service = {};
    service.GetAllWishCategory = getAllWishCategory;
    service.GetWishCodes = getWishCodes;
    return service;
    //var wishlisturl = $rootScope.config.wishurl;

    function getAllWishCategory() {
        var wishlisturl = $rootScope.config.wishurl;
//        var wishlisturl = 'http://localhost:8045/wishlistcategorys';
        console.log('---RUN-   getAllWishCategory-----1--');
        console.log('---RUN-   getAllWishCategory-----1--'+wishlisturl);
        wishlisturl=wishlisturl+'wishlistcategorys';
        console.log('---RUN-   getAllWishCategory-------'+ wishlisturl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(wishlisturl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }

    function getWishCodes(category) {
        var wishlisturl = $rootScope.config.wishurl;
       // var wishlisturl = 'http://localhost:8045/wishcategorycodes';
        wishlisturl=wishlisturl+'wishcategorycodes';
        var code = '';
        var q = $q.defer();
        $http.get(wishlisturl + '?category=' + category).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            q.resolve(data.data[0].code);
        });
        return q.promise;
    }


}






