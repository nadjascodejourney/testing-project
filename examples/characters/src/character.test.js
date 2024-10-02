import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {

  it('should create a character with a first name, last name, and role', () => {
    const character = new Character('Nadja', 'Probst', 'Webdesigner');

    expect(character.firstName).toBe('Nadja');
    expect(character.lastName).toBe('Probst');
    expect(character.role).toBe('Webdesigner');


    expect(character).toEqual(expect.objectContaining({
      // objectContaining is a partial match; useful when you don't care about all properties
      firstName: 'Nadja',
      lastName: 'Probst',
      role: 'Webdesigner',
    }));
  })


  it(
    'should create a character with a first name, last name, and role',
    () => {

    expect(() => new Character()).toThrowError(
      'First name and last name are required',
    );

    expect(new Character("Nadja", "Probst", "Player")).toEqual({
      id: expect.stringContaining('person-'),
      firstName: 'Nadja',
      lastName: 'Probst',
      role: "Player",
      level: 1,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      strength: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      wisdom: expect.any(Number),
      charisma: expect.any(Number),
      constitution: expect.any(Number),
      id: expect.stringContaining('person-'),
      // The definition of mocking: replacing a function with a fake implementation
    });

 
    expect(new Character("Nadja", "Probst", "Player").fullName).toBe('Nadja Probst'); // fullName is inherited from Person

    },
  );

  it('should allow you to increase the level', () => {

   /*  expect(() => new Character("Nadja", "Probst", "Player").levelUp()).toBe(2); 
 */

   // 1. Create a new character
   const character = new Character("Nadja", "Probst", "Player");

   // 2. Level up the character by calling the levelUp method on the character
   character.levelUp();

    // 3. Assert that the character's level is now 2
   expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {


    const character = new Character("Nadja", "Probst", "Player");

    const createdAt = character.createdAt;

    character.levelUp();

    expect(character.lastModified).not.toBe(createdAt);

    // how to make sure, that the lastModified date is always newer than the createdAt date? 

   /*  expect(character.lastModified).toBeGreaterThan(createdAt); */ // we would have to cast the Date object to a number and then compare the numbers
   // https://vitest.dev/api/expect.html#tobegreaterthan



  });
});
