{
   // Type Assertion

   let anything: any;

   anything = "level 2";

   anything = 222;
   // pore sure hoye type bola tai holo type assertion
   // (anything as string);
   // (anything as number);

   type customError = {
      message: string;
   };

   try {
      const kgToGm = (value: string | number): string | number | undefined => {
         if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
         }
         if (typeof value === "number") {
            return value * 1000;
         }
      };

      const result = kgToGm(1000) as number;
      const result2 = kgToGm("100") as string;
      console.log(result);
      console.log(result2);
   } catch (error) {
      console.log((error as customError).message);
   }
}
