{
   class Person {
      name: string;
      age: number;
      address: string;

      constructor(name: string, age: number, address: string) {
         this.address = address;
         this.age = age;
         this.name = name;
      }

      getSleep(numOfHours: number) {
         console.log(`${this.name} will sleep for ${numOfHours}`);
      }
   }

   class Student extends Person {
      constructor(name: string, age: number, address: string) {
         super(name, age, address);
      }
   }

   class Teacher extends Person {
      designation: string;

      constructor(
         name: string,
         age: number,
         address: string,
         designation: string
      ) {
         super(name, age, address);
         this.designation = designation
      }

      takeClass(numOfClass: number) {
         console.log(`${this.name} will take ${numOfClass}`);
      }
   }

   const student1 = new Student("asru", 21, "dhaka");
   const teacher1 = new Teacher("ajijur", 41, "dhaka", "programmer");
}
