function makeAnagram(a, b) {
    const aArray = a.split('');
    const bArray = b.split('');
    const aL = a.length;
    const bL = b.length;
    let anagramLetters = 0;

    for (let i = 0; i < aArray.length; i++) {
        for (let j = 0; j < bArray.length; j++) {
            if (aArray[i] === bArray[j]) {
                bArray.splice(j, 1);
                anagramLetters += 2;
                j = bArray.length;
            }
        }
    }

    const totalLetters = aL + bL;
    return totalLetters - anagramLetters;
}