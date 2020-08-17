export class AuthService {

  loginok = false;

  login() {
    this.loginok = true;
  }

  loginout() {
    this.loginok = false;
  }

  authenticate(): Promise<boolean> {
    console.log('--------------------AUTHENTICATE NOW------------');
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.loginok);
          }, 800);
      });
  }


}
