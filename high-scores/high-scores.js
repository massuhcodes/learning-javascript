export class HighScores {
    constructor(high_scores) {
        this.high_scores = high_scores;
    }

    get scores() {
        return this.high_scores;
    }

    get latest() {
        return this.high_scores.at(-1);
    }

    get personalBest() {
        return Math.max(...this.high_scores);
    }

    get personalTopThree() {
        // sort by decreasing order and get the first three scores
        return this.high_scores.sort((a, b) => b - a).slice(0, 3);
    }
}
