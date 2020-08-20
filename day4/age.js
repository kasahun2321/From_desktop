const prompt = require("prompt-sync")();
let user_input;
do {
  user_input = prompt("your age please: ");
  console.log("age is not right enter : " + user_input);
} 
while (user_input >18);
console.log("now it is good");