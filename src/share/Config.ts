export class Config {
  static rooturl = 'http://rowanfoo.ddns.net';
  // static rooturl = 'http://localhost';
//  static rooturl = 'http://192.168.0.10';

  static serverurl = Config.rooturl + ':10100/equity';
  //static wishlisturl = 'http://rowanfoo.ddns.net:10100/wishlistserver';
  //static algoturl = 'http://localhost:8080/';
  static algoturl = Config.rooturl + ':10100/';
//  static algoturl = Config.rooturl + ':8080/';

  static oauthurl = Config.rooturl + ':10200/';
//  static userurl = Config.rooturl + ':10300/';
  static userurl = 'http://localhost:8090/';
  static wishurl = 'http://rowanfoo.ddns.net:10400/';
//  static wishurl = 'http://localhost:8045/';

//var wishurl = 'http://localhost:8045/';
  static configurl = Config.rooturl + ':10500/config/';
  static commenturl = Config.rooturl + ':10100/comment';
//var commenturl = 'http://localhost:8080/comment';
  static categoryurl = Config.rooturl + ':10100/category';


  static fundamentalurl = Config.rooturl + ':10100/fundamental';
  static newsurl = Config.rooturl + ':10900/news';


}

