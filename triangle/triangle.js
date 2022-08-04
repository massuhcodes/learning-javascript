// Determine if a triangle is equilateral, isisceles, or scalene

export class Triangle {
    constructor(...sides) {
        this.sides = sides;
    }

    /**
     * Determine if the sides form an equilateral triangle.
     * @return {Boolean} - whether or not the sides form an equilateral triangle
     */
    get isEquilateral() {
        return this.sides.every((side) => {
            return side === this.sides[0] && side > 0;
        });
    }

    /**
     * Determine if the sides form an isosceles traingle.
     * @return {Boolean} - whether or not the sides form an isosceles triangle
     */
    get isIsosceles() {
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];
        return (a === b || b === c || a === c) && this.checkGeometry(a, b, c);
    }

    /**
     * Determine if the sides form a scalene triangle
     * @return {Boolean} - whether or not the sides form a scalene triangle
     */
    get isScalene() {
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];
        return a !== b && b !== c && a !== c && this.checkGeometry(a, b, c);
    }

    /**
     * Determine if the sides form a triangle (Also reducing code smell by
     * implementing DRY)
     * @param {Number} a, b, c - sides of a triangle
     * @returns {Boolean} - whether or not the sides do form a triangle
     */
    checkGeometry(a, b, c) {
        return (
            this.checkTwoSidesLessThanThird(a, b, c) &&
            this.checkTwoSidesLessThanThird(b, c, a) &&
            this.checkTwoSidesLessThanThird(a, c, b)
        );
    }

    /**
     *
     * @param {Number} side1, side2, side3 - sides of a triangle
     * @returns {Boolean} - whether or not, mathematically, the sides do form a triangle
     *
     * For a shape to be a triangle at all, all sides have to
     * be of length > 0, and the sum of the lengths of any
     * two sides must be greater than or equal to the length
     * of the third side
     */
    checkTwoSidesLessThanThird(side1, side2, side3) {
        return side1 + side2 >= side3;
    }
}
