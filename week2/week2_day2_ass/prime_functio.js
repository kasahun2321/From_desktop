const con = require("prompt-sync")();
let number = con("enter any number");
number = parseFloat(number);
let isPrime = "is prime"
function prime(num) {
  let x = num;


  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      isPrime = "is not prime"
      break;
    }
  }


  console.log(x + ": " + isPrime);
}


prime(number);


