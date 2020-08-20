const prompt = require("prompt-sync")();
let user_input=("enter age")
user_input=parseInt(user_input);
do {
  user_input = prompt("your age please: ");
  console.log("age: " + user_input);
} while (user_input ===18);
console.log("now it is good");