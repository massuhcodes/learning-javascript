/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines the cooking status of the lasagna based on
 * the timer
 * @param {number} timer - the elaspsed time
 * @returns {string} a message regarding the lasagna's status
 */
export function cookingStatus(timer) {
    if (timer == 0) {
        return "Lasagna is done.";
    } else if (timer == null) {
        return "You forgot to set the timer.";
    } else {
        return "Not done, please wait.";
    }
}

/**
 * Estimating the total preparation time based on the number of layers
 * @param {[string]} layers - layers of ingredients
 * @param {number} time - average preparation time
 * @returns
 */
export function preparationTime(layers, time) {
    return time != null ? layers.length * time : layers.length * 2;
}

/**
 * Determines the quantity of noodles and sauce needed to make the lasagna
 * @param {[string]} layers - layers of ingredients
 * @returns {object} - the new quantity object
 */
export function quantities(layers) {
    let quantity = {
        noodles: 0,
        sauce: 0,
    };
    for (const layer of layers) {
        if (layer == "noodles") {
            quantity.noodles += 50;
        } else if (layer == "sauce") {
            quantity.sauce += 0.2;
        }
    }
    return quantity;
}

/**
 * Add the last item from friend's list to the end of my list
 * @param {[string]} friendsList - my friends lasagna ingredients
 * @param {[string]} myList - my lasanga ingredients
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 *
 * @param {object} recipe - lasagna ingredients
 * @param {number} portions - the number to make of
 * @returns {object} - the scaled-up object of lasagna ingredients
 */
export function scaleRecipe(recipe, portions) {
    // copying recipe to avoid modification
    let scaledRecipe = Object.assign({}, recipe);
    const multiplier = portions / 2;
    for (const ingredient in recipe) {
        scaledRecipe[ingredient] *= multiplier;
    }
    return scaledRecipe;
}
