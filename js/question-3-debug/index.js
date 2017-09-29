function toRna(dna) {
    // Break string into an array
    const dnaArray = dna.split('');
    let output = '';
    for (let i = 0; i < dnaArray.length + 1; i++) {
        let current = dnaArray[i];
        if (current == 'G') {
            output += 'C';
        } else if (current == 'C') {
            output += 'G';
        } else if (current == 'T') {
            output += 'A';
        } else if (current == 'A') {
            output += 'U';
        } else {
            output += '';
        }
    }
    return output;
}

toRna(window.prompt('Give me some letters').toUpperCase());