// Write a program that continues asking the user for 
// a number until the user inputs “stop”.
//  The program should put all of the numbers into an array, 
//  sort it, and then output the mean number. To find the mean number:
//   if the array has odd length simply return the number in the middle, 
//   if the array has even length add the middle two numbers and divide by two.

 const prompt=require("prompt-sync")();  

  let input;
  let count=[];
  do {
 input=prompt("enter the key word  to stop the loop")

      
  } while (input!=="stop");


  const p=[];
  for(let i=0;i<=5;i++)
  {
      p[i]=Math.random()*60;

        console.log(p[i]);
     
  }
  

  var i = 0;
var arr = [];
 
while(i < 5){
 r = Math.floor(Math.random()*11+50);
 i++;
 arr[i] = r;
}
console.log(arr);