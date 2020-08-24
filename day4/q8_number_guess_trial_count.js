
// i dont get it but i will try 
const input=require('prompt-sync')();
let gues;

gues=parseInt(gues)
let count=0;
let message;
do
{
    gues=input("try to gues number between 1 to 100")
    if(gues<38)
    {

        count=count+1
        message="the the number is too low try bigger  number"
    }
    else if(gues>38)
    {

        count=count+1
        message="the the number is too big try smaller  number"
    }
}while(gues!=38)
message=gues+"is correct but you tried"
console.log(message+"trails is ="+count +"  times ")