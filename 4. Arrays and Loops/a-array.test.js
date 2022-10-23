describe('Arrays', () => {
    test('Exercise 18: Should get a specific array value', () => {
        /**
         * Get the value of the 3rd element in the array
         */
        const fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];
        const thirdFruit = fruits[2];

        expect(thirdFruit).toBe('orange');
    });

    test('Exercise 19: Should get the length of an array', () => {
        /**
         * Get the length of the array below
         * using the array property "length"
         */
        const fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];
        const length = fruits.length;

        expect(length).toBe(5);
    });

    test('Exercise 20: Should change the first element of the array', () => {
        /**
         * Change the first element of the array to "pear"
         */
        const fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];
        fruits[0] = 'pear';

        const [firstFruit] = fruits;
        expect(firstFruit).toBe('pear');
    });
});