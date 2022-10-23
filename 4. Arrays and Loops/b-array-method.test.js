describe('Array methods', () => {
    test('Exercise 21: Should remove the last item from the cars array', () => {
        /**
         * Remove the last item from the cars array
         * using the array method "pop"
         */
        const cars = ['BMW', 'Volvo', 'Tesla', 'Ford'];

        cars.pop();

        expect(cars).toEqual(['BMW', 'Volvo', 'Tesla']);
    });

    test('Exercise 22: Should add an item to the end of the cars array', () => {
        /**
         * Add "Audi" to the end of the cars array
         * using the array method "push"
         */
        const cars = ['BMW', 'Volvo', 'Tesla', 'Ford'];

        cars.push('Audi');

        expect(cars).toEqual(['BMW', 'Volvo', 'Tesla', 'Ford', 'Audi']);
    });

    test('Exercise 23: Should remove two items from the middle of the array', () => {
        /**
         * Remove the second and third item from the cars array
         * using the array method "splice"
         */
        const cars = ['BMW', 'Volvo', 'Tesla', 'Ford', 'Audi'];

        cars.splice(1, 2);

        expect(cars).toEqual(['BMW', 'Ford', 'Audi']);
    });
})