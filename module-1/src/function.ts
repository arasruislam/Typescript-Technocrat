// Normal function
function add(a: number, b: number): number {
   return a + b;
}

add(1, 5);

// Arrow function
const addArrow = (a: number, b: number): number => {
   return a + b;
};

const poorUser = {
   name: "asru",
   age: 20,

   addBalance(amount: number): string {
      return `Added ${amount} to balance`;
   },
};

const arr: number[] = [1, 2, 3, 4, 5];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
