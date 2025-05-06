{
   // Generic
   type genericType<T> = Array<T>;

   // const rollNumbers: number[] = [2, 3, 4, 5, 6];
   const rollNumbers: genericType<number> = [2, 3, 4, 5, 6];

   // const mentors: string[] = ["Goku", "Vegeta", "Gohan"];
   const mentors: Array<string> = ["Goku", "Vegeta", "Gohan"];

   // const boolArray: boolean[] = [true, false, true, false, true];
   const boolArray: Array<boolean> = [true, false, true, false, true];

   const user: genericType<{ name: string; age: number }> = [
      {
         name: "mazba",
         age: 100,
      },
      {
         name: "asru",
         age: 110,
      },
   ];

   // generic tuple
   // special array
   type genericTuple<X, Y> = [X, Y];
   const people: genericTuple<string, string> = ["m", "s"];

   const userWithId: [number, { name: string; email: string }] = [
      1234,
      { name: "person", email: "as@gmail.com" },
   ];
}
