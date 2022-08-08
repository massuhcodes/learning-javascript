/*
Creating a function to determine if a number is perfect,
abundant, or deficient based on Nicomachus' (60 - 120) CE
classification scheme for positive integers --
aliquot sum (https://en.wikipedia.org/wiki/Aliquot_sum)
*/

/**
 * A perfect number equals the sum of its positive divisors.
 * @param {Number} number - a positive integer
 * @returns {String} the classification of the input number
 *
 * The aliquot sum is defined as the sum of the factors of a
 * number not including the number itself. For example,
 * the aliquot sum of 15 is (1+3+5) = 9
 */
export const classify = (number) => {
    if (number < 1) {
        throw new Error("Classification is only possible for natural numbers.");
    }
    let factors = [];
    for (let integer = 1; integer < number; integer++) {
        if (number % integer == 0) {
            factors.push(integer);
        }
    }
    const aliquot_sum = factors.reduce((a, b) => a + b, 0);
    if (aliquot_sum == number) {
        return "perfect";
    } else if (aliquot_sum > number) {
        return "abundant";
    } else if (aliquot_sum < number) {
        return "deficient";
    }
};
