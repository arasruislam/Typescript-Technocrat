{
   const createArray = (param: string): string[] => {
      return [param];
   };
   const createArrayWithGeneric = <T>(param: T): T[] => {
      return [param];
   };
}
