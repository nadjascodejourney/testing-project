import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, increment } from './arithmetic.js'; // import the function to test it 

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(2,2)).toBe(4);
    });

    it('should add two negative numbers', () => {
        expect(add(-2,-2)).toBe(-4);
    });

    it("should parse strings into numbers and add them", () => {
        expect(add('2','2')).toBe(4); // this will fail! => expected 4 but got 22 => we need to fix the add function to parse the string into numbers
    });

    /* it("should fail, if you give it a string that can't be parsed into a number", () => {
        expect(add('a', 2)).toBe(2); // this will fail, because this will return NaN
    }); */

    it("should throw an error, if you give it a string that can't be parsed into a number", () => {
        expect(() => add('banana', 2)).toThrow("Invalid input"); // we call the add function with a string and a number, and we expect it to throw an error > different syntax than the previous test, because we are testing if the function throws an error
    });

    


}); // describe means we are describing a test suite

describe('subtract', () => {
    it("subtract two positive numbers", () => {
        expect(subtract(3,2)).toBe(1);
    });

    it("should accept and subtract numbers in an array", () => {
        expect(subtract([4, 1], 2)).toBe(1); // we are passing an array of numbers and a number to subtract; [4, 1] => 4 - 1 = 3 => 3 - 2 = 1
    }   );
});

describe('multiply', () => {
    it("multiply two positive numbers", () => {
        expect(multiply(3,3)).toBe(9)
    });
});

describe('divide', () => {
    it('should divide two positive numbers', () => {
        expect(divide(4,2)).toBe(2);
    })

});

describe.todo('increment', () => {
    it('should increment a number by 1', () => {
        expect(increment(1)).toBe(2);
    });
});
// todo means we are not implementing the test yet
