"use strict";
{
    // Type Assertion
    let anything;
    anything = "level 2";
    anything = 222;
    try {
        const kgToGm = (value) => {
            if (typeof value === "string") {
                const convertedValue = parseFloat(value) * 1000;
                return `the converted value is ${convertedValue}`;
            }
            if (typeof value === "number") {
                return value * 1000;
            }
        };
        const result = kgToGm(1000);
        const result2 = kgToGm("100");
        console.log(result);
        console.log(result2);
    }
    catch (error) {
        console.log(error.message);
    }
}
