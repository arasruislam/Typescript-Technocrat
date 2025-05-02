{
   // interface

   // all premitive ar belay type use korbo. object ar bela teO use kora jabe
   type User2 = {
      name: string;
      age: number;
   };
   // all object ar belay interface use korbo
   interface User {
      name: string;
      age: number;
   }

   // extends for type
   type userWithRole1 = User2 & { role: string };

   // extends for interface
   interface userWithRole2 extends User {
      role: string;
   }

   const user1: User = {
      name: "asru",
      age: 20,
   };

   const user2: userWithRole1 = {
      name: "asru",
      role: "admin",
      age: 23,
   };

   // For array
   type Roll1 = number[];
   interface Roll2 {
      [index: number]: number;
   }

   const rollNumber1: Roll1 = [1, 2, 3, 4, 5];
   const rollNumber2: Roll2 = [1, 2, 3, 4, 5];

   type Add = (num1: number, num2: number) => number;
   interface Add2 {
      (num1: number, num2: number): number;
   }
   const add: Add = (num1, num2) => num1 + num2;
   const add2: Add2 = (num1, num2) => num1 + num2;
}
