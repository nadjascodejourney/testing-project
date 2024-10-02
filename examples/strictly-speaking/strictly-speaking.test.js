import { test, expect } from 'vitest';

class Person {
  constructor(name) {
    this.name = name;
  }
}

/* test('objects with the same properties are equal', () => {
  expect({ a: 1, b: 2 }).toBe({ a: 1, b: 2 });
}); */ // This test will fail, BECAUSE toBe uses strict equality

// .toEqual is a matcher that compares the properties of objects
test('objects with the same properties are equal', () => {
  expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
});

test('objects with different properties are not equal', () => {
  expect({ a: 1, b: 2 }).not.toEqual({ a: 1, b: 3 }); // .not negates the matcher
});

test('objects with undefined properties are equal to objects without those properties', () => {
  expect({ a: 1 }).toEqual({ a: 1, b: undefined });
});

test('objects with undefined properties are *not* strictly equal to objects without those properties', () => {
  expect({ a: 1 }).not.toStrictEqual({ a: 1, b: undefined }); // .toStrictEqual uses strict equality to compare objects and arrays 
});

test('instances are equal to object literals with the same properties', () => {
  expect(new Person('Alice')).toEqual({ name: 'Alice' });
});

test('instances are not strictly equal to object literals with the same properties', () => {
  expect(new Person('Alice')).not.toStrictEqual({ name: 'Alice' });
});
