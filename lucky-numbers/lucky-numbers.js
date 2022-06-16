// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const str1 = array1.reduce((a, b) => a + b, "");
    const str2 = array2.reduce((a, b) => a + b, "");
    return Number(str1) + Number(str2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const str = String(value);
    return str == str.split("").reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    // before any type conversion, make sure there is a valid input
    if (input == "" || input == null || input == undefined) {
        return "Required field";
        // next else-if statements will test type conversion validity
    } else if (Number(input)) {
        return "";
    } else if (isNaN(Number(input)) || Number(input) == 0) {
        return "Must be a number besides 0";
    }
}
