
const con=require("prompt-sync")();
let number =con("enter any number");
number=parseFloat(number);
let lower=Math.floor(number);


if((number-lower)!==0)
{
    console.log("it is not whole number ")
}
else{
    console.log("is whole number ")
}