import { describe, it, expect } from 'vitest';
import { add } from './arithmetic.js'; // import the function to test it 

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(2,2)).toBe(4);
    });
}); // describe means we are describing a test suite, and todo means we are not implementing the test yet

describe.todo('subtract', () => {});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
