// Determine whether a number is an Armstrong number.

/**
 * Determine whether a number is an Armstrong number.
 * @param {Number} number - value to be determined on
 * @returns {Boolean} - whether or not it is an Armstrong number
 *
 * An Armstrong number is a number that is the sum of its own
 * digits each raised to the power of the number of digits.
 */
export const isArmstrongNumber = (number) => {
    const number_string = String(number);
    const number_string_length = number_string.length;
    const number_string_array = [...number_string];
    let total = 0;
    for (const char of number_string_array) {
        total += parseInt(char) ** number_string_length;
    }
    return total === number;
};
