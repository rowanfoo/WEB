// export class Comment {
//   constructor(
//     public id: number,
//     public  userid: string,
//     public  code: string,
//     public  date: string,
//     public  type: string, // idea , financial ,
//     public  text: string,
//     public  reject: string,
//     public  isReject: boolean
//   ) {
//   }
// }


export interface Comments {
  id: string,
  userid: string,
  code: string,
  date: string,
  type: string, // idea , financial ,
  text: string,
  reject: string,
  isReject: boolean
}
