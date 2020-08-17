export class User {

  public algo: Algo[]

  constructor(
    public username: string) {
  }

}

export interface Algo {
  id: string,
  value: string
}
