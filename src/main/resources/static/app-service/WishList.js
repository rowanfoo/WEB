angular
    .module('app')
    .factory('WishList', Service);

function Service($http, $localStorage, $q) {

    var service = {};
    service.GetAllWishCategory = getAllWishCategory;
    service.GetWishCodes = getWishCodes;


    return service;

    function getAllWishCategory() {
        var wishlisturl = 'http://localhost:8045/wishlistcategorys';
        console.log('HERE IN Service WishList 1');
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(wishlisturl).then(function (data) {
            console.log('------------HTTTPP--getData---------- ');
            data.data.forEach(function (value) {
                console.log('--------------getData---VAL------- ' + value);
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
        console.log('------------EXIT -----Service WishList----- ');
    }

    function getWishCodes(category) {
        var wishlisturl = 'http://localhost:8045/wishcategorycodes';
        var code = '';
        var q = $q.defer();
        // $http.get(wishlisturl + '?category=' + category).then(function (data) {
        //     console.log(JSON.stringify(data, null, "    "));
        //     for (i in data.data) {
        //         //   console.log('----DATA-------' +  data.data[i].code);
        //         code = code + ',' + data.data[i].code;
        //     }
        //     code = code.substring(1, code.length);
        //     q.resolve(code);
        // });
        $http.get(wishlisturl + '?category=' + category).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            // for (i in data.data) {
            //     //   console.log('----DATA-------' +  data.data[i].code);
            //     code = code + ',' + data.data[i].code;
            // }
            // code = code.substring(1, code.length);
            q.resolve(data.data[0].code);
        });
        return q.promise;
    }

    function getWishDetails(codes) {

        var wishlisturl = $rootScope.config.algoturl+'/wishlist/metadata/'+codes

        var q = $q.defer();

        $http.get(wishlisturl).then(function (data) {
            console.log(JSON.stringify(data, null, "    "));
            // for (i in data.data) {
            //     //   console.log('----DATA-------' +  data.data[i].code);
            //     code = code + ',' + data.data[i].code;
            // }
            // code = code.substring(1, code.length);
            q.resolve(data);
        });
        return q.promise;
    }

}






