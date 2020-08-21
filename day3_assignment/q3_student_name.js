let userinput=require('prompt-sync')();

let name =userinput("what is your name  :");
let total_credit_score =userinput("total credit you take  :");
total_credit_score=parseFloat(total_credit_score);
let x=total_credit_score;
let mesage;
if(x >0 && x<30)
{
mesage="freshman";
} 
else if(x<60)
{
  mesage="sophomere";
}
else if(x<90)
{

    mesage="junior" ;
}
else 
{
    mesage="senior";
}

console.log("student Name" +"\t"+"general campus name")
console.log( name+"\t"+ " \t "+ mesage)