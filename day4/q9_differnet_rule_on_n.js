const input=require('prompt-sync')();
let gues=input("enter the number you want ");
gues=parseFloat(gues)

let x,y,z,a;
x=2*gues;
y=3*gues;
a=gues*gues;
z=gues*gues*gues;

console.log("gues"+"  2*gues"+ "  3*gues"+"   ZxZxZ"+"    ZxZ")
console.log(gues+"\t"+x+"\t"+y+"\t"+a+"\t"+z)
