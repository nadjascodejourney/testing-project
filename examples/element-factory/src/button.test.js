import { createButton } from './button.js';
import {screen} from '@testing-library/dom'; // screen is a global object that is used to render the element and query the element
import { userEvent } from '@testing-library/user-event'; // userEvent is a global object that is used to simulate user events

describe('createButton', () => {
  it('should create a button element', () => {
    const newButton = createButton(); // createButton method comes from button.j
    expect(newButton).toBeInstanceOf(HTMLElement); // HTMLElement is a built-in object that represents one of the HTML elements; toBeInstanceOf is a method that checks if the object is an instance of a class 
    // https://vitest.dev/api/expect.html#tobeinstanceof
    expect(newButton.tagName).toBe('BUTTON'); // tagName is a property that returns the tag name of the element in uppercase
  });

  it('should create a button element', () => {
    document.body.appendChild(createButton()); 
    const button = screen.getByRole('button', {name: 'Click Me'}); // getByRole is a method that returns an element that matches the role attribute
    expect(button).toBeInTheDocument(); // toBeInTheDocument is a method that checks if the element is in the document
  });

  it('should have the text "Click Me"', () => {
    const newButton = createButton(); // createButton method comes from button.js
    expect(newButton.textContent).toStrictEqual('Click Me');
   // textContent is a property that returns the text content of the element
  });

  it('should change the text to "Clicked!" when clicked', async () => {

    const newButton = createButton(); // createButton method comes from button.js

    newButton.click(); // click is a method that simulates a mouse click on an element

    expect(newButton.textContent).toEqual('Clicked!');

         // textContent is a property that returns the text content of the element
  });
});


/* it('should change the text to "Clicked!" when clicked', async () => {

  const newButton = createButton(); // createButton method comes from button.js
  userEvent.click(newButton); // userEvent.click is a method that simulates a mouse click on an element
}); */