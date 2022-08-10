// Creating a function that calculates dart throw scores

/**
 * Calculates and returns earned score in single toss of dart game
 * @param {Number} x - horizontal distance from center of target
 * @param {Number} y - vertical distance from center of target
 * @returns {Number} - the earned score based on where dart landed
 */
export const score = (x, y) => {
    const outer_radius = 10;
    const middle_radius = 5;
    const inner_radius = 1;
    // using pythagorean theorem to get point's radius
    const test = (x ** 2 + y ** 2) ** 0.5;
    if (test > outer_radius) {
        return 0;
    } else if (test > middle_radius && test <= outer_radius) {
        return 1;
    } else if (test > inner_radius && test <= middle_radius) {
        return 5;
    } else if (test <= inner_radius) {
        return 10;
    }
};
