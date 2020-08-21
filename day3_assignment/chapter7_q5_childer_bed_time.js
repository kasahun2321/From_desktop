let userinput=require('prompt-sync')();

let age =userinput("hey kid what is your age  :");
let season =userinput("Tell me the seseon  :");
let message;
if (age <=5 && (season==="summer"||season==="fall"))
{
message="8:30 p.m"
}
else if(age<=5&&(season==="winter"||season==="spring"))
{
message="8:00 p.m"
}
else if((x>6 && age>12)&& season==="summer")
{
message="9:30 p.m"
}
else if((age>6 && age>12)&& (season==="winter"||season==="spring"||season==="fall"))

{
message="8:30 p.m"
}
else if((age>=13)&& season==="summer")
{
message="10:30 p.m"
}
else if((age>=13)&& (season==="winter"||season==="spring"||season==="fall"))
{
message="9:30 p.m"
}
else{

    message="you are good enough to manage your self"
}

console.log("Age"+"\t"+"Season"+"\t"+"Bed Time")
console.log(age+"\t"+season+"\t"+message)