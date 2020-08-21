let userinput=require('prompt-sync')();

let type_of_user =userinput("are you student or faculty :");
let overdue=userinput("how many book you overdue before");
overdue=parseInt(overdue);
let message;
if(type_of_user==="student")
{
    if (overdue===0)
    {
       message="you have 6 weeks of loan duration" 
    }
    else if(overdue===3)
    {
        message="you have 4 weeks of loan duration"
    }
    else
    {
        message="you have 2 weeks of loan duration"
    }

}
else if(type_of_user==="faculty")
{
    if (overdue===0)
    {
       message="you have 16 weeks of loan duration" 
    }
    else if(overdue<=3)
    {
        message="you have 12 weeks of loan duration"
    }
    else
    {
        message="you have 8 weeks of loan duration"
    }
}
else{
    message="you are not eligible"
}

console.log(message);