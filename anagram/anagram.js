// Find the list of anagrams from the given word

/**
 * Given a word, return an array of its anagrams
 * @param {String} word - the given word
 * @param {Array} tests - an array of potential anagrams (string)
 * @returns {Array} successfulCandidates - an array of anagrams (string)
 */
export const findAnagrams = (word, tests) => {
    let successfulCandidates = [];
    let sortedWord;
    let sortedTest;
    // if the given word is all uppercase
    if (word.split("").every((letter) => letter === letter.toUpperCase())) {
        // remove any duplicates (even if lowercase or uppercase)
        tests = tests.filter((test) => test.toUpperCase() !== word);
        // modify the word for comparison
        sortedWord = word.split("").sort().join("");
        for (let test of tests) {
            // modify the test for comparison
            sortedTest = test.toUpperCase().split("").sort().join("");
            // update the resulting array if test if successful
            if (sortedWord === sortedTest) {
                successfulCandidates.push(test);
            }
        }
        // if the given word is all lowercase
    } else {
        // modify the word for comparison
        sortedWord = word.toLowerCase().split("").sort().join("");
        for (let test of tests) {
            // modify the test for comparison
            sortedTest = test.toLowerCase().split("").sort().join("");
            // update the resulting array if test if successful
            if (sortedWord === sortedTest) {
                successfulCandidates.push(test);
            }
        }
    }

    return successfulCandidates;
};
