export const removeSpecialChars = str => {
    return str
        .replace(/[^\w\s]/gi, '') // remove special characters
        .replace(/[ąĄ]/g, 'a') // replace Polish diacritic letters with their non-diacritic counterparts
        .replace(/[ęĘ]/g, 'e')
        .replace(/[ćĆ]/g, 'c')
        .replace(/[łŁ]/g, 'l')
        .replace(/[ńŃ]/g, 'n')
        .replace(/[óÓ]/g, 'o')
        .replace(/[śŚ]/g, 's')
        .replace(/[źŹżŻ]/g, 'z')
        .replace(/\s+/g, '-') // replace spaces
        .toLowerCase(); // convert all characters to lowercase
};
