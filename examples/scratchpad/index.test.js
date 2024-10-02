import { test, expect, vi} from 'vitest'; 

const logSpy = vi.spyOn(console, 'log'); // vi is a global object, "spyOn" is a method on it; it comes from vitest
// spy on console.log; console is a global object, "log" is a method on it 

const mockfn = vi.fn(); // mock function; it comes from vitest; fn() works like this: It takes a function and returns a new function that records its calls and returns values.

const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5); // spy on Math.random; mockImplementation does not call the original function, but instead returns the value that you provide; it comes from vitest

test('a super simple test', () => {
  console.log('Hello, world!');
/*   console.log('Hello, world!'); */

mockfn('Hello, world!'); // mock function is called with 'Hello, world!'

const result = Math.random(); // result is 0.5
  

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello, world!');
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenLastCalledWith('Hello, world!');
  expect(logSpy).toHaveBeenCalledOnce();



  expect(mockfn).toHaveBeenCalled(); // mock function has been called

  expect(result).toBe(0.5); // result is 0.5 (comes from the mockImplementation)

});
