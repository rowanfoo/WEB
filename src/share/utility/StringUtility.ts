export class StringUtility {

  public static stringcomma(arr: any[]): string {

    if ('code' in arr[0]) {
      let stringarr = [];

      arr.forEach(value1 => {
        stringarr.push(value1.code)
      })

      return this.getstringcomma(stringarr)


    } else {
      return this.getstringcomma(arr)
    }


  }

  private static getstringcomma(arr: string[]): string {
    let temp: string = ""
    arr.forEach(value1 => {
      temp = temp + value1 + ","

    })
    return temp.substring(0, temp.length - 1)


  }


}
