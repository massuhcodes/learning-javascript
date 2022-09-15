//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (test) => {
    const modifiedTest = test
        .toLowerCase()
        .replaceAll("-", "")
        .replaceAll(" ", "")
        .split("");
    return modifiedTest
        .map((element, index) => index === modifiedTest.indexOf(element))
        .every((element) => element);
};
