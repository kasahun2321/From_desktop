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
let a=2,y=7;
let mesage="hello class";
if (a<3)
{
    if (y>10)
    mesage="hello";
}
else 
{
    mesage="good by ";
}

console.log(mesage);