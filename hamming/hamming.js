// Calculate the Hamming Distance between two DNA strands.

/**
 * Calculate the Hamming Distance between two
 * DNA strands by calculating the differences between them.
 * @param {String} strand_One - first DNA strand
 * @param {String} strand_Two - second DNA strand
 * @returns {Number} differences - the number of differences between the two strands
 */
export const compute = (strand_One, strand_Two) => {
    if (strand_One.length !== strand_Two.length) {
        throw new Error("strands must be of equal length");
    }

    let differences = 0;
    // convert string into list by spreading
    // map each element in the first strand with the second
    const array_of_array_of_letters = [...strand_One].map((element, index) => [
        element,
        strand_Two[index],
    ]);
    // compare the letters
    array_of_array_of_letters.forEach((array) => {
        if (array[0] !== array[1]) {
            differences += 1;
        }
    });
    return differences;
};
