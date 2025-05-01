{
   // Union types
   type FrontendDevloper = "Level 1" | "Level 2"; // string literal type
   type FullstackDevloper = "frontend" | "exprt";

   type Developer = FrontendDevloper | FullstackDevloper;

   const newDeveloper: FrontendDevloper = "Level 1";

   type User = {
      name: string;
      email: string;
      gender: "male" | "female";
      bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
   };

   const user1: User = {
      name: "John Doe",
      email: "o4o9v@example.com",
      gender: "male",
      bloodGroup: "A+",
   };

   // Intersection types
   type FrontendDeveloper = {
      skills: string[];
      designation: "frontend developer";
   };
   type BackendDeveloper = {
      skills: string[];
      designation2: "backend developer";
   };
   type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

   const fullstackDeveloper: FullstackDeveloper = {
      skills: ["HTML", "CSS", "JS"],
      designation: "frontend developer",
      designation2: "backend developer",
   };
}
