const prompt = require("prompt-sync")();
let user_input;
do {
  user_input = prompt("your age please: ");
  user_input=parseInt(user_input)
  console.log("your age is  : " + user_input);
} 
while (user_input <18);
console.log("now it is good");