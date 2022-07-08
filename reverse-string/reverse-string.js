// Given a string return its reversed form.

/**
 * Given a string return its reversed form
 * @param {string} text - a given string to reverse
 * @returns {string} reversed_string - the reversed string
 */
export const reverseString = (text) => {
    const reversed_string = text.split("").reverse().join("");
    return reversed_string;
};
