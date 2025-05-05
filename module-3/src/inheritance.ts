{
   class Student {
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
   class Teacher {
      name: string;
      age: number;
      address: string;
      designation: string;

      constructor(
         name: string,
         age: number,
         address: string,
         designation: string
      ) {
         this.address = address;
         this.age = age;
         this.name = name;
         this.designation = designation;
      }

      getSleep(numOfHours: number) {
         console.log(`${this.name} will sleep for ${numOfHours}`);
      }
      takeClass(numOfClass: number) {
         console.log(`${this.name} will take ${numOfClass}`);
      }
   }

   const student1 = new Student("asru", 21, "dhaka");
   const teacher1 = new Teacher("ajijur", 41, "dhaka", "programmer");
}
