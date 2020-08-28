const prompt = require("prompt-sync")();
let user_input=prompt("Enter number of iteration ")
let n=parseInt(user_input)
let i=1,all=0;
while(i<=n)
{
all=all+i;
i=i+2;
all

}
console.log(all);
