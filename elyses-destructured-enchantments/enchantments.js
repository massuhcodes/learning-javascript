/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
    return deck[0];
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
    return deck.slice(1, 2).shift();
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
    const temp = deck[0];
    deck[0] = deck[1];
    deck[1] = temp;
    return deck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
    const topCard = deck.shift();
    return [topCard, deck];
}

/** @type Card[] **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
    if (deck.length == 1) {
        deck = deck.concat(FACE_CARDS);
    } else if (deck.length == 0) {
        deck.push(undefined);
        deck = deck.concat(FACE_CARDS);
    } else {
        const first = deck[0];
        const rest = deck.splice(1);
        let newDeck = [];
        newDeck = newDeck.concat(first, FACE_CARDS).concat(rest);
        return newDeck;
    }
    return deck;
}
