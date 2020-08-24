const prompt = require("prompt-sync")();
let user_input=prompt("please enter salary")

user_input=parseFloat(user_input);
let x,y,z,net_salary;

x=0.18*user_input;
y=0.28*user_input;
z=0.35*user_input;


if(user_input<5000)
{
    net_salary=user_input-x;
}
else if(user_input>5000 && user_input<10000)
{
    net_salary=user_input-y;
}
else 
{
    net_salary=user_input-y;
}

console.log("the net salary="+net_salary);

let n = prompt("Please enter a number to test if it is prime: ");
let factor_count = 0;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    factor_count++;
  }
}

if(factor_count === 0)
{
    console.log("is prime");
}
else
{
    console.log("not a prime")
}