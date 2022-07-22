// Detemine if a sentence is a pangram

/**
 * Determine if a sentence is a pangram
 *
 * @param {String} string - pangram candidate
 * @returns {Boolean} - whether or not the candidate is a pangram
 *
 * A pangramis a sentence using every letter
 * of the alphabet at least once.
 */
export const isPangram = (string) => {
    const panagram_set = new Set(string.replace(/[^a-z]/gi, "").toLowerCase());
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of alphabet) {
        if (!panagram_set.has(letter)) {
            return false;
        }
    }
    return true;
};
