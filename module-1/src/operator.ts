{
   // spread operator
   const bros: string[] = ["Goku", "Vegeta", "Gohan"];
   const newBros: string[] = [...bros, "Goten", "Trunks"];

   bros.push(...newBros);

   const mentors = {
      name: "Goku",
      redux: "Gohan",
      react: "Vegeta",
   };
   const mentors2 = {
      prisma: "Firoz",
      nextjs: "Asif",
      db: "Shahriar",
   };
   const mentorsList = {
      ...mentors,
      ...mentors2,
   };


   // rest operator
   const add = (...numbers: number[]): number => {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];
      }
      return sum;
   }

}
