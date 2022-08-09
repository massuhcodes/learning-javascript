// Given a string representing a matrix of numbers,
// return the rows and columns of that matrix.

export class Matrix {
    constructor(matrix_string) {
        this.array_of_rows = matrix_string.split("\n").map((string) => {
            const row = string.split(" ");
            const row_of_ints = row.map((char) => parseInt(char));
            return row_of_ints;
        });
    }

    get rows() {
        return this.array_of_rows;
    }

    /**
     * Create an array of columns from the already made array of rows
     */
    get columns() {
        let array_of_columns = [];
        // the length of all rows are the same
        const max_index = this.array_of_rows[0].length - 1;
        for (let index = 0; index <= max_index; index++) {
            const column = this.array_of_rows.map((row) => row[index]);
            array_of_columns.push(column);
        }
        return array_of_columns;
    }
}
