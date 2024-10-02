import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

// Maybe you want to make sure your code behaves as expected given different environment variables. You could get really fancy in the way you filter your tests—or, you could just mock those environment variables for a hot minute. Here, we're testing a logger that behaves differently based on the MODE environment variable. We're using vi.stubEnv to set the MODE variable to devmode or production, and then we're testing that the logger logs to the console in devmode and doesn't log to the console in production. We're also using vi.spyOn to spy on console.log to make sure it's being called correctly.

// DEVMODE
describe('logger', () => {
    describe("development", () => {


        beforeEach(()=> {
                vi.stubEnv("MODE", "devmode"); // for these test, we want to be in development mode
        })

        afterEach(()=> {
                vi.restoreAllMocks(); // restore all mocks after each test
        })

        it("logs to console in devmode", () => {
            const logSpy = vi.spyOn(console, "log");

            log("Hello");

            expect(logSpy).toHaveBeenCalledWith("Hello");
        })

    });


    // More importantly, we probably want to make sure that doesn’t log in production.


    // PRODUCTION
    describe("production", () => {
        beforeEach(()=> {
            vi.stubEnv("MODE", "production"); 
    })

    afterEach(()=> {
            vi.restoreAllMocks(); // restore all mocks after each test
    })


    it("should NOT log to console in devmode", () => {
        const logSpy = vi.spyOn(console, "log");

        log("Hello");

        expect(logSpy).not.toHaveBeenCalledWith("Hello");
    })



    })
});
