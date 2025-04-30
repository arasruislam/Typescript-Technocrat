"use strict";
// Normal function
function add(a, b) {
    return a + b;
}
add(1, 5);
// Arrow function
const addArrow = (a, b) => {
    return a + b;
};
const poorUser = {
    name: "asru",
    age: 20,
    addBalance(amount) {
        return `Added ${amount} to balance`;
    },
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((elem) => elem * elem);
