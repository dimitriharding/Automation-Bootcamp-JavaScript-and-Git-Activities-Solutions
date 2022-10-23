import { spyOnLog } from '../testSetup'

describe('Variables & Data Types', () => {
    test('Exercise 06: Should check the type of all variables', () => {
        /**
         * Check the type of the following variables
         * 
         * Tip: all data types are expected to be lowercase
         */

        let width = 100;
        let firstName = "Usain";
        const athlete = {
            firstName: "Usain",
            lastName: "Bolt",
            age: 34,
            nationality: "Jamaican",
        };
        const races = ["100m", "200m", "4x100m relay"]
        const isRetired = true;
        const hasChildren = function () { return true; };


        expect(typeof width).toBe('number');
        expect(typeof firstName).toBe('string');
        expect(typeof athlete).toBe('object');
        expect(races.constructor.name.toLowerCase()).toBe('array');
        expect(typeof isRetired).toBe('boolean');
        expect(typeof hasChildren).toBe('function');
    });

    test('Exercise 07: Should create array with values 10, 11, 12, 13, 14', () => {
        /**
         * Create an array called "numbers" with the values 10, 11, 12, 13, 14
         * that is in reverse order
         */

        const numbers = [14, 13, 12, 11, 10];

        expect(numbers).toEqual(Array.from({ length: 5 }, (_, i) => 14 - i));
    });

    test('Exercise 08: Should create an object with properties fullName, position, age, gender', () => {
        /**
         * Create an object that is to represent a QualityWorks 
         * employee with the following properties:
         * - fullName
         * - position
         * - age
         * - gender
         */

        const employee = {
            fullName: 'John Doe',
            position: 'Software Engineer',
            age: 30,
            gender: 'M'
        };

        expect(Object.keys(employee)).toEqual(expect.arrayContaining(['fullName', 'position', 'age', 'gender']));
    });

    test('Exercise 09: Create a string template with employee values', () => {
        /**
         * Copy the object from the previous exercise and
         * create a string template that will print the
         * following message:
         * My name is [fullName], I am a [position] at QualityWorks. I am a [gender] of [age] years old.
         */

        const employee = {
            fullName: "Dimitri Harding",
            position: "Software Engineer",
            age: 34,
            gender: "M"
        }

        console.log(`My name is ${employee.fullName}, I am a ${employee.position} at QualityWorks. I am a ${employee.gender} of ${employee.age} years old.`);

        expect(spyOnLog).toHaveBeenCalledWith(Object.keys(employee)
            .reduce((previousValue, currentValue) => {
                return previousValue.replace(`[${currentValue}]`, employee[currentValue])
            }, 'My name is [fullName], I am a [position] at QualityWorks. I am a [gender] of [age] years old.'));
    });
});