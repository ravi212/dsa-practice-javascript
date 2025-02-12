function reverseInt(n) {
    const sign = Math.sign(n);
    return sign * parseInt(n.toString().split("").reverse().join(""));
}

console.log(reverseInt(-115425));