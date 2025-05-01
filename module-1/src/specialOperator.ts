{
   // ternary Operator || optional chaining | nullish coalescing

   const age: number = 18;

   if (age >= 18) {
      console.log("You can vote");
   } else {
      console.log("You can't vote");
   }

   const isAdult = age >= 18 ? "adult" : "not adult";
   console.log({ isAdult });

   // nullish coalescing operator
   // null / unidefined ---> decision making
   const isAuthenticated = "";
   const result1 = isAuthenticated ?? "Guest";
   const result2 = isAuthenticated ? isAuthenticated : "Guest";
   console.log({ result1, result2 });

   // Optional chaining
   type User = {
      name: string;
      address: {
         street: string;
         city: string;
         road: string;
         presentAddress: string;
         permanentAddress?: string;
      }
   }

   const user: User = {
      name: "John Doe",
      address: {
         street: "123 Main St",
         city: "New York",
         road: "Broadway",
         presentAddress: "123 Main St",
         // permanentAddress: "123 Main St",
      }
   }
   const permanentAddress = user.address?.permanentAddress ?? "No permanent address";
   console.log({ permanentAddress });
}
