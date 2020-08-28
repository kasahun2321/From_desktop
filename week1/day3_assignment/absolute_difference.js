
let userinput=require('prompt-sync')();

let x =userinput("Enter first number  :");
let y =userinput("Enter second number  :");
x=parseFloat(x);
y=parseFloat(y);

z=x-y

if ( z<0)
{
    z=z*-1;
    console.log(`input x  input y  the abs value difference`)
    console.log(x+"\t" +"  "+y+"\t"+"   "+z);

}
else
{
    console.log(`input x   input y  the abs value difference`)
    console.log(x+"\t"+y+"\t"+z);
}