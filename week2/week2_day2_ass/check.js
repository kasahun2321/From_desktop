const con = require("prompt-sync")();
let number = con("enter any number");
number = parseFloat(number);
let xx = parseInt(number)

console.log("the number " + number)
console.log("the number " + xx)

console.log(typeof number);
console.log(typeof xx);
let diif = number - xx;
if (diif != 0) {
    console.log("is fraction number ");
}
else {
    console.log("is not fraction ");
}