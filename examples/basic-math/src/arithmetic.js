export const add = (a, b) => {
    if(typeof a === "string" || typeof b === "string") {
        a = Number(a);
        b = Number(b);
    }

    if(isNaN(a)) {
        throw new Error("Invalid input");

    }


    return a + b;

};

export const subtract = (a, b) => {



    if(Array.isArray(a)) {
        a = a.reduce((a, b) => a - b); // we are using the reduce method to subtract all the numbers in the array from the first number [4, 1] => 4 - 1 = 3
    }

    return a - b;
};

export const multiply = (a, b) => {
    return a * b;
};

export const divide = (a, b) => {
    return a / b;
};

export const increment = (a) => {
    return a + 1;
}