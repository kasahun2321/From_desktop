let data= require('prompt-sync')();
let student =data("Enter no student =");
student=parseFloat(student); 
let teem=data("enter total team created=");

teem=parseFloat(teem);

let x=student%teem;
let y=student-x;
let z=y/teem; // no of team created

let a=z;// assigned to changed add
let b=teem-x;// no of group need more value



if (x<=y) 
{
    ++a;
    console.log("you can create  "+b+"group of "+z+" people"  +x+"group of"+a+"people");
    console.log(x);
  }
  
  {
    console.log("you may have enter wrong value")
  }