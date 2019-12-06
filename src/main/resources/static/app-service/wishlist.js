angular
    .module('app')
    .factory('WishList', Service);

function Service($http, $localStorage) {
    var service = {};

    service.GetAllWishCategory = getAllWishCategory;
    return service;

    function getAllWishCategory() {
        var wishlisturl = 'http://localhost:8045/wishlistcategorys';

        $http.get(wishlisturl).then(function (data) {
            console.log('HERE IN CONTROLLER 2');

            console.log(JSON.stringify(data, null, "    "));
            wishlistchartlist = [];

            for (i in data.data) {
                wishlistchartlist.push(data.data[i]);
            }
           return wishlistchartlist;

        });



        console.log('-------------RETURN---------- ');

    }







}





