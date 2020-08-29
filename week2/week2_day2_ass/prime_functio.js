"use strict";

const con = require("prompt-sync")();
let number = con("Enter any number you want to check :");
number = parseFloat(number);

function check_prime(num) {
  let x = num;
  let isPrime =false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime =false; 
     break;
    }
    else
    {
      isPrime=true
    }
  }

return isPrime;
  
}


let result = check_prime(number);
console.log(number + ": " + result);


