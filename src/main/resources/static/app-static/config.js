
var rooturl='http://rowanfoo.ddns.net';
var serverurl='http://rowanfoo.ddns.net:10100/equity';
var wishlisturl='http://rowanfoo.ddns.net:10100/wishlistserver';
var algoturl='http://rowanfoo.ddns.net:10100/';
var oauthurl='http://rowanfoo.ddns.net:10200/';
var userurl='http://rowanfoo.ddns.net:10300/';
var wishurl='http://rowanfoo.ddns.net:10400/';


function setconfig($rootScope){
    console.log('----setconfig-----');

    // $rootScope.config={
    //     data: serverurl + '/data',
    //     wishlist: wishlisturl,
    //     wishcategorycodes: wishlisturl + '/wishcategorycodes',
    //     wishcategory: wishlisturl + '/wishlistcategorys',
    //     algobycodes: algoturl + '/algobycodes'
    //
    //
    //
    // };
    $rootScope.config={
        algoturl: algoturl,
        oauthurl: oauthurl,
        userurl: userurl ,
        wishurl: wishurl
    };

}




