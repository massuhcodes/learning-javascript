//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
    constructor(number) {
        this.number = number;
    }

    get sumOfSquares() {
        let total = 0;
        for (let num = 1; num <= this.number; num++) {
            total += Math.pow(num, 2);
        }
        return total;
    }

    get squareOfSum() {
        let total = 0;
        for (let num = 1; num <= this.number; num++) {
            total += num;
        }
        return Math.pow(total, 2);
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}
