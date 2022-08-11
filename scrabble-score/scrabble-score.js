// Compute the Scrablle score

/**
 * Given a word, compute the Scrabble score for that word.
 * @param {String} word - the given word to compute score from
 * @returns {Number} total - the score computed from the word
 */
export const score = (word) => {
    const updated_word = word.toLowerCase();
    let total = 0;
    for (const letter of updated_word) {
        if (
            ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(letter)
        ) {
            total += 1;
        } else if (["d", "g"].includes(letter)) {
            total += 2;
        } else if (["b", "c", "m", "p"].includes(letter)) {
            total += 3;
        } else if (["f", "h", "v", "w", "y"].includes(letter)) {
            total += 4;
        } else if (["k"].includes(letter)) {
            total += 5;
        } else if (["j", "x"].includes(letter)) {
            total += 8;
        } else if (["q", "z"].includes(letter)) {
            total += 10;
        }
    }
    return total;
};
