import { spyOnLog } from '../testSetup'

describe('Variables', () => {
    test('Exercise 01: Should create variable nationalFruit with value Ackee', () => {
        /**
         * Create a variable called "nationalFruit", 
         * assign the value "Ackee" to it.
         */


        const nationalFruit = "Ackee";
        const [variableName] = Object.keys({ nationalFruit });

        expect(variableName).toBe("nationalFruit");
        expect(nationalFruit).toBe("Ackee");
    });

    test('Exercise 02: Should create variable x with value 100', () => {
        /**
         * Create a variable called "x", 
         * assign the value 100 to it.
         */

        const x = 100;
        const [variableName] = Object.keys({ x });

        expect(variableName).toBe("x");
        expect(x).toBe(100);
    });

    test('Exercise 03: Should print sum of operation x + y', () => {
        /**
         * Print the sum of 25 + 1.5, 
         * using two variables: x and y
         */

        const x = 25;
        const y = 1.5;
        const sum = x + y;

        console.log(sum);
        expect(sum).toBe(26.5);
        expect(spyOnLog).toHaveBeenCalledWith(26.5);
    });

    test('Exercise 04: Should print variable z with sum of x + y', () => {
        /**
         * Create a variable called z, 
         * assign x + y to it, and log the result
         */

        const x = 100;
        const y = 1.5;
        const z = x + y;

        console.log(z);
        expect(z).toBe(101.5);
        expect(spyOnLog).toHaveBeenCalledWith(101.5);
    });

    test('Exercise 05: Should declare 3 variables in one line', () => {
        /**
         * Declare three variables on one single line using the following
         * names and values:
         * 
         * firstName = "Louise"
         * lastName = "Bennett"
         * age = 87
         * 
         * 📝 Replace the comments below with your code
         */

        let firstName = "Louise", lastName = "Bennett", age = 87;

        expect(firstName).toBe("Louise");
        expect(lastName).toBe("Bennett");
        expect(age).toBe(87);
    });
});
