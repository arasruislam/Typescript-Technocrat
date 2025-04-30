"use strict";
{
    // spread operator
    const bros = ["Goku", "Vegeta", "Gohan"];
    const newBros = [...bros, "Goten", "Trunks"];
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
    const mentorsList = Object.assign(Object.assign({}, mentors), mentors2);
    // rest operator
    const add = (...numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    };
}
