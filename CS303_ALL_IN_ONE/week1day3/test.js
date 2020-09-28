/* eslint-disable*/
https://www1.uimn.org/ui_applicant/applicant/login.do
"use strict"
function positive(arr){
    
    return arr>0;
}
let array =[-10, 10, 20, -20, -10, 30];
let returnVal = array.filter(positive);
console.log(returnVal); // [10, 20, 30]

//sort three number
let x=[3,5,1]

let y=[]

function sort (a,b,c)
{
  if(a>b && a>c)
  {
    y[2]=a;
    if(b>c)
    y[0]=c;
    y[1]=b
  }
  else if (b>c && b>a)
  {
    y[2]=b
    if(a>c)
    {
      y[0]=c
      y[1]=a
    }
  }
  else{
    y[2]=c;
    if(a>b)
    y[0]=b;
    y[1]=a;

  }
  return y

}

console.log(sort(3.1,9,1))