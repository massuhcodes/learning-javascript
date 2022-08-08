// Given students' names along with the grade they are in,
// create a roster for the school.

export class GradeSchool {
    constructor() {
        this.class_by_grade = {};
    }

    // Return a copy of the roster
    roster() {
        // unlike shallow copying ({...Object} or Object.assign({}, Object)),
        //deep copying disconnects the copy from the original
        return JSON.parse(JSON.stringify(this.class_by_grade));
    }

    /**
     * Add a student to the roster
     * @param {String} name - the name of the student to add
     * @param {Number} grade - the grade the student belongs to
     */
    add(name, grade) {
        // check to see if the name exist in a different grade
        // if it does, delete the name from the grade as there
        // cannot be same names in multiple grades
        for (const grade in this.class_by_grade) {
            if (this.class_by_grade[grade].includes(name)) {
                const index = this.class_by_grade[grade].indexOf(name);
                this.class_by_grade[grade].splice(index, 1);
            }
        }

        if (!(grade in this.class_by_grade)) {
            this.class_by_grade[grade] = [name];
        } else {
            this.class_by_grade[grade].push(name);
        }
        // sorting the names of each grade alphabetically
        for (const grade in this.class_by_grade) {
            this.class_by_grade[grade].sort();
        }
    }

    /**
     * Return a class roster of the specified grade
     * @param {Number} number - the grade of the student
     * @returns - the class roster of the specified grade
     */
    grade(number) {
        if (!(number in this.class_by_grade)) {
            return [];
        } else {
            // no modification is made on the original
            return JSON.parse(JSON.stringify(this.class_by_grade[number]));
        }
    }
}
