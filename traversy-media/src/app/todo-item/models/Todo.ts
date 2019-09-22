export class Todo{
   
   id: number;
   name: string;
   dateToComplete: string;
   completed: boolean;

   constructor(
      id: number, 
      name: string, 
      dateToComplete: string = "Undefined Date", 
      completed: boolean = false
      ){
         this.id = id;
         this.name = name;
         this.dateToComplete = dateToComplete;
         this.completed = completed;
      }
}