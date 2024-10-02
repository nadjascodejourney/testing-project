import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, increment } from './arithmetic.js'; // import the function to test it 

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(2,2)).toBe(4);
    });
}); // describe means we are describing a test suite

describe('subtract', () => {
    it("subtract two positive numbers", () => {
        expect(subtract(3,2)).toBe(1);
    });
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
