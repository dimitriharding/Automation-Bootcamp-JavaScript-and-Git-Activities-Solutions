describe('Conditional Activities', () => {
    test("Exercise 10: What's bigger", () => {
        /**
         * Update the function named greaterNum that:
         * takes 2 arguments, both numbers.
         * returns whichever number is the greater (higher) number.
         * (e.g. "The greater number of 5 and 10 is 10.").
         */

        function greaterNum(num1, num2) {
            // only edit the if/else condition here
            // >  means grater than
            // < means less than
            if (num1 > num2) {
                return num1;
            } else {
                return num2;
            }
        }

        expect(greaterNum(5, 10)).toBe(10);
        expect(greaterNum(100, 10)).toBe(100);
        expect(greaterNum(6, 9)).toBe(9);
    });

    test("Exercise 11: The World Translator", () => {
        /**
         * Update the function named helloWorld that:
         * takes 1 argument, a language code (e.g. "es", "de", "en") 
         * returns "Hello, World" for the given language, 
         * for at least 3 languages. 
         * It should default to returning English. 
         * Run the code to make sure it's returning the correct message for each language.
         */

        function helloWorld(lang) {
            // only update the if/else statements and the  execute the code
            if (lang === "de") {
                return 'Bonjour tout le monde';
            } else if (lang === "es") {
                return 'Hola, Mundo';
            } else {
                return 'Hello, World';
            }
        }

        expect(helloWorld('es')).toBe('Hola, Mundo');
        expect(helloWorld('de')).toBe('Bonjour tout le monde');
        expect(helloWorld()).toBe('Hello, World');
    });

    test("Exercise 12: The Grade Assigner", () => {
        /**
         * Update the function named assignGrade that:
         * takes 1 argument, a number score.
         * returns a grade for the score, either "A", "B", "C", "D", or "F". 
         * Run the code to make sure you get the right grades for the right scores.
         */

        function assignGrade(score) {
            /**
             * Only update the if and else statements
             * Greater than 90 is an A
             * Greater than 70 but less than 80 is a C
             * Less than 66 is F
             */
            if (score > 90) {
                return 'A';
            } else if (score > 80) {
                return 'B';
            } else if (score > 70) {
                return 'C';
            } else if (score > 65) {
                return 'D';
            } else {
                return 'F';
            }
        }

        expect(assignGrade(95)).toBe('A');
        expect(assignGrade(75)).toBe('C');
        expect(assignGrade(66)).toBe('D');
        expect(assignGrade(55)).toBe('F');
    });

    test("Exercise 13: The Pluralizer", () => {
        /**
         * Update the function named pluralize that: 
         * Takes 2 arguments, a noun and a number.
         * Returns the number and pluralized form, like "5 cats" or "1 dog". 
         * Run the code to print out the correct data
         * Bonus: Make it handle a few collective nouns like "sheep" and "geese".
         */

        function pluralize(noun, number) {
            // Only update if statement
            // Tip: noun != 'sheep' && noun != 'geese' 
            if (number > 1 && noun != 'sheep' && noun != 'geese') {
                return number + ' ' + noun + 's';
            } else {
                return number + ' ' + noun;
            }
        }

        expect(pluralize('cat', 0)).toBe('0 cat');
        expect(pluralize('cat', 5)).toBe('5 cats');
        expect(pluralize('dog', 1)).toBe('1 dog');
        expect(pluralize('sheep', 2)).toBe('2 sheep');
        expect(pluralize('geese', 2)).toBe('2 geese');
    });
});