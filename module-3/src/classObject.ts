{
   class Animal {
      name: string;
      species: string;
      sound: string;

      constructor(name: string, species: string, sound: string) {
         this.name = name;
         this.sound = sound;
         this.species = species;
      }
   }

   const dog = new Animal("German shepard", "dog", "ghew ghew");
   
}
