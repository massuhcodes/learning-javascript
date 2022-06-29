// Decode array of resistor colors to its numerical value

const resistor_colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];

/**
 * Decode the array of resistor colors to its numerical value
 * @param {[String]} colors - contains only resistor color values
 * @returns {Int} - the value of the colors
 */
export const decodedValue = (colors) => {
    let value = "";
    colors.slice(0, 2).map((color) => {
        value += resistor_colors.indexOf(color);
    });
    return parseInt(value);
};
