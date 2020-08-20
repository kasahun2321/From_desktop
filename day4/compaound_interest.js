const prompt = require("prompt-sync")();
let pv=prompt("enter persent total value:")
pv=parseFloat(pv);
let rate=prompt("enter the interest rate: ")
rate=parseFloat(pv);
let year=prompt("for how many year: ")
year=parseFloat(year)
let percentrate=(pv*rate)/100;
let interest= 1+percentrate;
let step=Math.pow(interest,year)
// Math.pow((1+(rate/100)),year);
step=step-1;

let fv=pv*step;


console.log("your interest for"+" "+year+"year is ="+fv)