export class CoreStock {

  constructor(
    public  code: string,
    public date: string,
    public name: string,
    public descp: string,
    public shares: number,
    public marketcap: number,
    public category: string,
    public subcategory: string,
    public top: string,
    public tags: string
  ) {
  }
}

