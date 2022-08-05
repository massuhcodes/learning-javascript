// Transform the legacy scrabble data format
// to the shiny new scrabble data

/**
 * Transform the legacy scrabble data format to the shiny new format
 * @param {dict(Number: Array(String))} legacy_data - the old scrabble format
 * @return {dict(String: Number)} data - the new scrabble format
 */
export const transform = (legacy_data) => {
    let data = {};
    for (const property in legacy_data) {
        for (const letter of legacy_data[property]) {
            data[letter.toLowerCase()] = parseInt(property);
        }
    }
    return data;
};
