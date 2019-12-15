var rooturl = 'http://rowanfoo.ddns.net';
var serverurl = 'http://rowanfoo.ddns.net:10100/equity';
var wishlisturl = 'http://rowanfoo.ddns.net:10100/wishlistserver';
var algoturl = 'http://rowanfoo.ddns.net:10100/';
var oauthurl = 'http://rowanfoo.ddns.net:10200/';
var userurl = 'http://rowanfoo.ddns.net:10300/';
var wishurl = 'http://rowanfoo.ddns.net:10400/';
var configurl = 'http://rowanfoo.ddns.net:10500/config/';


function setconfig($rootScope) {
    console.log('----setconfig-----');
    $rootScope.config = {
        algoturl: algoturl,
        oauthurl: oauthurl,
        userurl: userurl,
        wishurl: wishurl,
        configurl: configurl
    };

}




