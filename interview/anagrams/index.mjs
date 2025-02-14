// If Provided strings are anagrams of each other.
// Only consider charachters not spaces or punctuations.
// consider capital letters to be same as small letters.

function isAnagramUsingSort(stringA, stringB) {
    //Only consider charachters not spaces or punctuations
    // consider capital letters to be same as small letters.

    console.log("Before SORT", stringA, stringB)
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    console.log("After SORT", stringA, stringB)

    return stringA === stringB;

}

console.log("[USING SORT METHOD] : ",isAnagramUsingSort("abbc", "bbca"))


function isAnagramsUsingCharMap(stringA, stringB) {
    //Only consider charachters not spaces or punctuations
    // consider capital letters to be same as small letters.
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    const charMapStrA = generateCharMap(stringA);
    const charMapStrB = generateCharMap(stringB);

    console.log("Char Maps : ", charMapStrA, charMapStrB)

    if(Object.keys(charMapStrA).length != Object.keys(charMapStrB).length) {
        return false;
    }

    for (let char in charMapStrA) {
        if (charMapStrA[char] != charMapStrB[char]) {
            return false;
        }
    }

    return true;
}


function generateCharMap(string) {
    let charMap = {};

    for (let char of string){
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1
    }

    return charMap;
}


console.log("[USING SORT METHOD] : ", isAnagramsUsingCharMap("abbc", "bbca"))