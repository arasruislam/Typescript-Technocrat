{
   // nullable types
   const searchName = (value: string | null) => {
      if (value) {
         console.log("searching");
      } else {
         console.log("no search");
      }
   };

   searchName(null);

   // unknown type
   const getSpeedMeterPerSecond = (value: unknown) => {
      if (typeof value === "number") {
         const convertedSpeed = (value * 1000) / 3600;

         console.log("The speed is ", convertedSpeed);
      } else if (typeof value === "string") {
         const valueInNumber = value.split(" ")[0];
         const convertedSpeed = (Number(valueInNumber) * 1000) / 3600;
         console.log("The speed is ", convertedSpeed);
      } else {
         console.log("Invalid input");
      }
   };

   getSpeedMeterPerSecond(100);
   getSpeedMeterPerSecond("1000");
   getSpeedMeterPerSecond(null);



   // Never type
   function throwError(message: string): never {
      throw new Error(message);
   }
   throwError("error hoo gaya")
}
