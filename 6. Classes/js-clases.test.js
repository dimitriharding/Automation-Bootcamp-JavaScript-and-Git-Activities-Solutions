describe('JavaScript Classes', () => {
    test('Exercise 31: Should create a fruit from a class', () => {
        /**
         * Create a new fruit from the Fruit class
         * and pass in the name as "Apple"
         * and the color as "red"
         */

        class Fruit {
            constructor(name, color) {
                this.name = name;
                this.color = color
            }
        }

        const fruit = new Fruit('Apple', 'red');


        expect(fruit.name).toBe('Apple');
        expect(fruit.color).toBe('red');
    });

    test('Exercise 32: Should create a class named Cars, that has a year and model', () => {
        /**
         * Create a Car class that accepts new parameters
         * year and model
         * and set the year and model to the class
         * 
         */

        class Car {
            constructor(year, model) {
                this.year = year;
                this.model = model
            }
        }

        const car = new Car(2019, 'Tesla');

        expect(car.year).toBe(2019);
        expect(car.model).toBe('Tesla');
    });

    test('Exercise 33: Should create a class that inherent from a parent class', () => {

        /**
        * 1. Create a class named "Car" that accepts new parameters
        * color and bodyType
        * and set the color and bodyType to the class
        * 
        * Example: 
        * - color: red
        * - bodyType: wagon
        */

        // 📝 Create Car class here
        class Car {
            constructor(color, bodyType) {
                this.color = color;
                this.bodyType = bodyType
            }
        }


        /**
        * 2. Create a class named "Toyota" that inherent from the Car class
        * and has a year and model
        * 
        * 3. Create a method named "getCarInfo" that returns 
        * the year, model and color
        * 
        * Example:
        *  - This is a 2019 Toyota Rav4 in red color
        * 
        * 
        * Example:
        * - year: 2019
        * - model: Rav4
        * 
        * Tips: 
        *   - Use the super() method to call the parent constructor
        */

        // 📝 Create Toyota class here
        class Toyota extends Car {
            constructor(year, model, color, bodyType) {
                super(color, bodyType);
                this.year = year;
                this.model = model
            }

            getCarInfo() {
                return `This is a ${this.year} Toyota ${this.model} in ${this.color} color`
            }
        }

        const rav4 = new Toyota(2019, 'Rav4', 'red', 'wagon');

        expect(rav4.year).toBe(2019);
        expect(rav4.model).toBe('Rav4');
        expect(rav4.color).toBe('red');
        expect(rav4.bodyType).toBe('wagon');
        expect(rav4.getCarInfo()).toBe('This is a 2019 Toyota Rav4 in red color');
    });
});