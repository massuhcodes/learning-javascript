// Convert a number into a string that contains
// raindrop sounds corresponding to certain
// potential factors

/**
 * Test the number in each case to get sounds of
 * raindrops (7, 5, and 3 are the tests)
 * @param {Number} number - the subject in question
 * @returns {String} sounds - the string value
 * which can be either the sounds of raindrop or
 * the number itself
 */
export const convert = (number) => {
    let sounds = "";
    if (number % 7 === 0) {
        sounds = "Plong" + sounds;
        if (number % 5 === 0) {
            sounds = "Plang" + sounds;
            if (number % 3 === 0) {
                // divisible by 7, 5, and 3
                sounds = "Pling" + sounds;
            }
        } else if (number % 3 === 0) {
            // divisible by 7, 3, except 5
            sounds = "Pling" + sounds;
        }
    } else if (number % 5 === 0) {
        sounds = "Plang" + sounds;
        if (number % 3 === 0) {
            // divisible by 5 and 3 only
            sounds = "Pling" + sounds;
        }
    } else if (number % 3 === 0) {
        sounds = "Pling" + sounds;
    } else {
        // return the number in string format if all else fails
        return String(number);
    }
    return sounds;
};
