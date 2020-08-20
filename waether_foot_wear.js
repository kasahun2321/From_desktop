let userinput=require('prompt-sync')();

let x =userinput("Enter the weather   :");


let wear;

if(x==="hot")
{
wear="sandals"
}
else if(x==="rain")
{
   wear="galoshes "
}
else if(x==="snow")
{
    wear="boots"
}
console.log("weather   wearing style")
console.log(  x+"\t"+"  "+wear)

//indentation is very important. 