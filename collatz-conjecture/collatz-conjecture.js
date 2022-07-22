// Given a number, return the number of steps required to reach 1

/**
 * Given a number, return the number of steps required to reach 1
 *
 * @param {Number} number - given to output the amount of steps to reach 1
 * @returns {Number} increment - the number of steps it took to reach 1
 *
 * Take any positive integer n. If n is even,
 * divide n by 2 to get n / 2. If n is odd,
 * multiply n by 3 and add 1 to get 3n + 1.
 * Repeat the process indefinitely.
 * The conjecture states that no matter which
 * number you start with, you will always reach
 * 1 eventually.
 */
export const steps = (number) => {
    if (number < 1) {
        throw new Error("Only positive numbers are allowed");
    }
    let increment = 0;
    while (number !== 1) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number = 3 * number + 1;
        }
        increment++;
    }
    return increment;
};
