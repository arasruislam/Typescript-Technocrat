"use strict";
{
    // Object destructuring
    const user = {
        name: "John Doe",
        // age: 30,
        isActive: true,
        company: "programming hero",
        id: 1,
    };
    const { name, age, isActive, company, id } = user;
    // Array destructuring
    const friends = ["John", "Doe", "Smith"];
    const [friend1, friend2, friend3] = friends;
    const [first, ...rest] = friends;
}
