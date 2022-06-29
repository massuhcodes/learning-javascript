// Convert a DNA strand to its RNA complement

/**
 * Convert a DNA strand to its RNA complement
 * @param {string} dna - a string representing dna
 */
export const toRna = (dna) => {
    let rna = "";
    for (const nucleotide of dna) {
        switch (nucleotide) {
            case "G":
                rna += "C";
                break;
            case "C":
                rna += "G";
                break;
            case "T":
                rna += "A";
                break;
            case "A":
                rna += "U";
                break;
            default:
                break;
        }
    }
    return rna;
};
