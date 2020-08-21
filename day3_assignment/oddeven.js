let userinput=require('prompt-sync')();

let value =userinput("Enter the number you want to deteremine weather even or odd :");

value=parseInt (value)

if (value%2===0)
{
    console.log(value+" is evene number ");

}
else
{
    console.log(value+"  is odd number ");
}
