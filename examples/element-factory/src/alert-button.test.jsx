import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertButton } from './alert-button';
import { vi } from 'vitest';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {
    render(<AlertButton />);
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    expect(input).toBeInTheDocument(); // toBeInTheDocument is a custom matcher that looks for the element in the document
    expect(button).toBeInTheDocument();
  });

  it.only('should trigger an alert', async () => {

    const handleSubmit = vi.fn(); 

// Render the AlertButton component
    render(<AlertButton onSubmit={handleSubmit} />);
// create a spy on window.alert
    const alertSpy = vi.spyOn(window, 'alert');

// Get the input and button elements
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

// Clear the input, type 'Hello', and click the button
    await act(async() => {
      await userEvent.clear(input); 
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

  
// Expect the alert to have been called with 'Hello'
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Hello');
  });
});
