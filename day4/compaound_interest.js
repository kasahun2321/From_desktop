const prompt = require("prompt-sync")();
let pv=prompt("enter persent total value")
pv=parseInt(pv);
let rate=prompt("enter the interest rate ")
rate=parseInt(pv);
let pv=prompt("enter persent total value")
pv=parseInt(pv);
let year=prompt("for how many year ")
year=parseFloat(year)

let fv=pv(Math.pow((1+rate),year))

console.log("your interest ")