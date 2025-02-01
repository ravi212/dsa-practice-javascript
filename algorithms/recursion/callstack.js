function three() {
    console.log("Three")
}
function two() {
    three();
    console.log("Two")
}
function one() {
    two()
    console.log("One")
}

one()