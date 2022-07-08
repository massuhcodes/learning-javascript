// Given an age in seconds, calculate how old someone would be on one of the eight planets.

const planet_orbital_periods_in_earth_years = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

const earth_seconds = 31557600;

/**
 * Given an age in seconds, calculate how old someone would be on one of the eight planets.
 * @param {string} name - the name of the planet to get the age of
 * @param {int} seconds - the given number of seconds on earth
 * @returns {float} age_on_planet - the age on the planet from the given earth seconds
 */
export const age = (name, seconds) => {
    const earth_age = seconds / earth_seconds;
    const age_on_planet = parseFloat(
        (earth_age / planet_orbital_periods_in_earth_years[`${name}`]).toFixed(
            2
        )
    );
    return age_on_planet;
};
