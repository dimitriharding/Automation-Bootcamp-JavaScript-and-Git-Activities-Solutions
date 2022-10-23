import { spyOnLog } from '../testSetup'

describe('Functions', () => {
    test('Exercise 14: Should successfully call/execute a function', () => {
        /**
         * Call the function named "helloWorld"
         */
        function helloWorld() {
            console.log('Hello, World from the function');
        }

        helloWorld();

        expect(spyOnLog).toHaveBeenCalledWith('Hello, World from the function');
    });

    test('Exercise 15: Should create a function called helloWorld', () => {
        /**
         * Create a function called "helloWorld"
         * and log "Hello, World from the function"
         */

        function helloWorld() {
            console.log('Hello, World from the function');
        }

        helloWorld();

        expect(spyOnLog).toHaveBeenCalledWith('Hello, World from the function');
    });

    test('Exercise 16: Should return "Hello"', () => {
        /**
         * Make the function called "hello"
         * and return "Hello"
         */

        function hello() {
            return "Hello";
        }

        expect(hello()).toBe('Hello');
    });

    test('Exercise 17: Should take two numbers num1 and num2 and return sum', () => {
        /**
         * Create a function called "add"
         * and return the sum of num1 and num2
         */

        function add(num1, num2) {
            return num1 + num2
        };

        expect(add(1, 2)).toBe(3);
        expect(add(10, 20)).toBe(30);
    });
});