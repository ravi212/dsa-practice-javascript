function isPalindrome(string) {
    return string.split("").reverse().join("") === string;
}

function isPalindromeUsingEvery(string) {
    return string.split("").every((char, i) => {
        return char == string[string.length - i - 1];
    });
}

console.log("[ISPALINDROME 'abba'] : ", isPalindrome("abba"))
console.log("[ISPALINDROME 'abc'] : ", isPalindrome("abc"))

console.log("[ISPALINDROME WITH EVERY 'abba'] : ", isPalindromeUsingEvery("abba"))
console.log("[ISPALINDROME WITH EVERY 'abc'] : ", isPalindromeUsingEvery("abc"))