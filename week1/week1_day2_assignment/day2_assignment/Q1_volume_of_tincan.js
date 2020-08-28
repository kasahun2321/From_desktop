
let prompt=require('prompt-sync')();
let raduis= prompt("Enter the radius of the tincan in cm =");
let height= prompt("Enter the height of the tincan in cm = ");
raduis=parseFloat(raduis);
height=parseFloat(height);
rad=Math.pow(raduis,2);
let pi=Math.PI;
//formula to calculate the volume of cylinder var v = Math.PI * r * r * h;
let vol_of_tincan=pi*rad*height;
//print the result
 console.log("the volume of the tin con= "+ vol_of_tincan + "cm^3");
