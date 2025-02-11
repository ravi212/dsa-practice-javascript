function reverseString(string) {
    return string.split("").reverse().join("");
}

function reverseStringWithForLoop(string) {
   let reversed = "";

   for (let char of string) {
        reversed = char + reversed;
   }

   return reversed;
}

function reverseStringWithReduce(string) {
    return string.split("").reduce((reversed, char) => char + reversed, "");
}

console.log("[REVERSE FUNCTION] : ", reverseString("abc"))
console.log("[FOR LOOP] : ", reverseStringWithForLoop("abc"))
console.log("[REDUCE METHOD] : ", reverseStringWithReduce("abc"))