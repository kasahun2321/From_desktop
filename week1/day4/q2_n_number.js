const prompt = require("prompt-sync")();
let user_input=prompt("Enter number of iteration ")
user_input=parseInt(user_input)
let phrasee=prompt("Tell me the name in phrase ")

let n=user_input;
let i=0;
while(i<=n)
{
    console.log(phrasee)
    i++;
}