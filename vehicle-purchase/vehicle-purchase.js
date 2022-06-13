// @ts-check

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    return kind == "car" || kind == "truck" ? true : false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    const rest = " is clearly the better choice.";
    return option1 < option2 ? option1 + rest : option2 + rest;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        originalPrice *= 0.8;
    } else if (age >= 3 && age <= 10) {
        originalPrice *= 0.7;
    } else if (age > 10) {
        originalPrice *= 0.5;
    }
    return originalPrice;
}
