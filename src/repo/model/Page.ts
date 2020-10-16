export class Page<T> {
  content: T[];
  totalElements: number

  constructor(val: T[], totalcount: number) {
    this.content = val
    this.totalElements = totalcount
  }

}
