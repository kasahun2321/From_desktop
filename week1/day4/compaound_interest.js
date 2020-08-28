const prompt = require("prompt-sync")();
let p=prompt("Enter initial total value:")//p is cassh on account inital
p=parseFloat(p);
let rate=prompt("enter the interest rate per year: ")//interesst rate
rate=parseFloat(rate);
let year=prompt("for how many year: ")// for how many year
year=parseInt(year)
let calc=1+(rate/100);
let total_amount=p*Math.pow(calc,year);

console.log(year)
console.log(calc);
console.log("your interest for"+" "+year+" year is ="+total_amount)


