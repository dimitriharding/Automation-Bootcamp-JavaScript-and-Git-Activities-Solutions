import { spyOnLog } from '../testSetup'
describe('For Loops', () => {
    test('Exercise 24: Should loop through numbers from 0-9', () => {
        /**
         * Create a for loop that logs the numbers 0 to 9
         */

        for (let i = 0; i < 10; i++) {
            console.log(i);
        }

        expect(spyOnLog).toHaveBeenCalledWith(0);
        expect(spyOnLog).toHaveBeenCalledWith(5);
        expect(spyOnLog).toHaveBeenCalledWith(9);
    });

    test('Exercise 25: Should loop through elements of array', () => {
        /**
         * Create a for loop that loops through the array
         * and logs each element
         */

        const fruits = ['apple', 'banana', 'orange'];

        for (let x of fruits) {
            console.log(x);
        }

        expect(spyOnLog).toHaveBeenCalledWith('apple');
        expect(spyOnLog).toHaveBeenCalledWith('banana');
        expect(spyOnLog).toHaveBeenCalledWith('orange');
    });

    test('Exercise 25: Should loop through keys in object', () => {
        /**
         * Create a for loop that loops through the object
         * and logs each key
         */

        const fruits = {
            'Apple': 'red',
            'Banana': 'yellow',
            'Orange': 'orange'
        };

        for (let x in fruits) {
            console.log(x);
        }

        expect(spyOnLog).toHaveBeenCalledWith('Apple');
        expect(spyOnLog).toHaveBeenCalledWith('Banana');
        expect(spyOnLog).toHaveBeenCalledWith('Orange');
    });
});