// Determine whether a given word is an isogram

/**
 * Given a string, determine whether or not it is an isogram
 * @param {String} test - the given string value
 * @returns {Boolean} - whether or not the given string is an isogram
 */
export const isIsogram = (test) => {
    const modifiedTest = test
        .toLowerCase()
        .replaceAll("-", "")
        .replaceAll(" ", "")
        .split("");
    // the current index must correspond to the current element as indexOf returns the first of that found element
    return modifiedTest.every(
        (element, index) => index === modifiedTest.indexOf(element)
    );
};
