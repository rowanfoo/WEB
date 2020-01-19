var rooturl = 'http://rowanfoo.ddns.net';
var serverurl = 'http://rowanfoo.ddns.net:10100/equity';
var wishlisturl = 'http://rowanfoo.ddns.net:10100/wishlistserver';
//var algoturl = 'http://localhost:8080/';
var algoturl = 'http://rowanfoo.ddns.net:10100/';
var oauthurl = 'http://rowanfoo.ddns.net:10200/';
var userurl = 'http://rowanfoo.ddns.net:10300/';
//var userurl = 'http://localhost:8090/';
var wishurl = 'http://rowanfoo.ddns.net:10400/';

//var wishurl = 'http://localhost:8045/';
var configurl = 'http://rowanfoo.ddns.net:10500/config/';
var commenturl = 'http://rowanfoo.ddns.net:10100/comment';
//var commenturl = 'http://localhost:8080/comment';
var categoryurl = 'http://rowanfoo.ddns.net:10100/category';


var fundamentalurl = 'http://rowanfoo.ddns.net:10100/fundamental';
var newsurl = 'http://rowanfoo.ddns.net:10900/news';

function setconfig($rootScope) {
    console.log('----setconfig-----');
    $rootScope.config = {
        algoturl: algoturl,
        oauthurl: oauthurl,
        userurl: userurl,
        wishurl: wishurl,
        configurl: configurl,
        commenturl: commenturl,
        fundamentalurl: fundamentalurl,
        newsurl: newsurl,
        categoryurl: categoryurl
    };

}




