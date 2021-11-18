export class User { 
    firstName: string;
     lastName: string;
     fiscalCode: Number;
     
     constructor(firstName: string, lastName: string, fiscalCode: Number) { 
         this.firstName = firstName; 
         this.lastName = lastName;
         this.fiscalCode=fiscalCode;
     } }