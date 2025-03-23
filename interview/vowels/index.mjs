function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"] 
    const strArr = string.split("");
    let count = 0;
    for (let char of strArr) {
        if (vowels.includes(char.toLowerCase())) {
            count += 1;
        }   
    }
    console.log(`Vowels count in string [${string}] : `, count)
}

function countVowelsRegEx(string) {
    const matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0; 
}

countVowels("Hi There");
console.log(`Vowels count in string using Regex : `, countVowelsRegEx("Hi There"));