export class Employee{ 

   constructor ( 
      public f_name: string = "",
      public l_name: string= "",
      public email: string= "",
      public Cnumber: number=0,
      public Address: string= "",
      public user_name: string= "",
      public gender:string= "",
      public Qaulifications:string= "",
      public Exp:string= "",
      public languages: object[] = [{Name:'C/C++',IsEnabled:false}, {Name:'Java',IsEnabled:false},
        {Name:'C#',IsEnabled:false}, {Name:'PHP',IsEnabled:false}, {Name:'Python',IsEnabled:false}]
   ) {  } 
}