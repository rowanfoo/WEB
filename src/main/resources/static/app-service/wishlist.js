angular
    .module('app')
    .factory('WishList', Service);

function Service($rootScope, $http, $q) {
    var service = {};
    service.GetAllWishCategory = getAllWishCategory;
    service.GetWishCodes = getWishCodes;
    service.GetWishDetails = getWishDetails;
    return service;

    function getAllWishCategory() {
        var wishlisturl = $rootScope.config.wishurl;
        wishlisturl = wishlisturl + 'wishlistcategorys';

        console.log('-----------getAllWishCategory-----url------------' + wishlisturl);
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
        wishlisturl = wishlisturl + 'wishcategorycodes';
        var code = '';
        var q = $q.defer();
        $http.get(wishlisturl + '?category=' + category).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            q.resolve(data.data[0].code);
        });
        return q.promise;
    }


    function getWishDetails(codes) {
        var wishlisturl = $rootScope.config.algoturl + '/wishlist/metadata/' + codes;
        var q = $q.defer();
        $http.get(wishlisturl).then(function (data) {
            //console.log(JSON.stringify(data, null, "    "));
            q.resolve(data.data);
        });
        return q.promise;
    }

}






