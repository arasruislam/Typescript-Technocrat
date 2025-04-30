{
   type Student = {
      name: string;
      age: number;
      isActive: boolean;
      address: string;
      roll: number;
   }
   // Type Aliases
   const student1: Student = {
      name: "John Doe",
      age: 20,
      isActive: true,
      address: "123 Main St",
      roll: 1,
   };

   const student2: Student = {
      name: "Jane Doe",
      age: 20,
      isActive: true,
      address: "123 Main St",
      roll: 2,
   };

   
   type Add = (a: number, b: number) => number;
   const add: Add = (a, b) => {
      return a + b;
   }
}