{
   class Animal {
      // public name: string;
      // public species: string;
      // public sound: string;

      // parameter properties
      constructor(
         public name: string,
         public species: string,
         public sound: string
      ) {
         // this.name = name;
         // this.sound = sound;
         // this.species = species;
      }

      makeSound() {
         console.log(`the ${this.name} says ${this.sound}`);
      }
   }

   const dog = new Animal("German shepard", "dog", "ghew ghew");
   const cat = new Animal("partian", "cat", "meaw meaw");

   dog.makeSound();
   cat.makeSound();
}
