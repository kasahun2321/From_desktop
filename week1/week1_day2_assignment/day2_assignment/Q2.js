let data= require('prompt-sync')();
let volume =data("Enter Volume in quarts =");
volume=parseFloat(volume); 
let To_litter =volume*0.94635 ;
console.log(volume+" volume in quarts when changed to litter= "+To_litter +"L");

