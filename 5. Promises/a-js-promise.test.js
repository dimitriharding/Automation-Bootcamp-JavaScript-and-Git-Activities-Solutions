import { spyOnLog } from '../testSetup'
describe('JavaScript Promise', () => {
    test('Exercise 26: Should get a promise value using await', async () => {

        /**
         * Get the value of the promise below
         * using the await keyword
         */
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise resolved');
            }, 1000);
        });

        const value = await promise;

        expect(value).toBe('Promise resolved');
    });

    test('Exercise 27: Should get a promise value using then', () => {

        /**
        * Get the value of the promise below
        * using the then keyword and log the value
        */
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise resolved');
            }, 1000);
        });

        promise.then((value) => {
            console.log(value);
        }).then(() => {
            expect(spyOnLog).toHaveBeenCalledWith('Promise resolved');
        })
    });

    test('Exercise 28: Should create a promise that throws an error', async () => {

        /**
        * Create a promise that throws an error
        * using the reject keyword
        */
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Promise rejected');
            }, 1000);
        });

        try {
            await promise;
        } catch (error) {
            expect(error).toBe('Promise rejected');
        }
    });

    test('Exercise 29: Should create a promise that throws an error using then', () => {

        /**
        * Create a promise that throws an error
        * using the reject keyword
        */
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Promise rejected');
            }, 1000);
        });

        promise.then((value) => {
            console.log(value);
        }).catch((error) => {
            expect(error).toBe('Promise rejected');
        })
    });

    test('Exercise 30: Should create a function that accepts a param and return a promise', async () => {

        /**
        * Create a function called "getPromise"
        * that accepts a param and returns a promise
        * that resolves the param
        */

        function getPromise(param) {
            return new Promise((resolve, reject) => {
                resolve(param);
            });
        }


        await expect(getPromise('Awesome!')).resolves.toEqual('Awesome!');
        await expect(getPromise('It works!')).resolves.toEqual('It works!');
        await expect(getPromise('This is how legends are made!')).resolves.toEqual('This is how legends are made!');
    });
});