// return a charachter most commonly used in a string.

function maxChar(string) {
    let charMap = {};
    let max = 0;
    let maxChar = "";
    for(let char of string) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if(charMap[char] > max ) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChar("aabcdddd"))