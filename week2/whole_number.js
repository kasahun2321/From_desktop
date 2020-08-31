
const con=require("prompt-sync")();
let number =con("enter any number");
number=parseFloat(number);
let lower=Math.floor(number);


if((number-lower)!==0)
{
    console.log("it is not whole number ")
}
else{
    console.log("is whole number ")
}


    let p=[1,2,3,4,5,5,7,8,9,9,6,1,2];
   

   function getUnique(array)
   {
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


var uniqueNames = getUnique(p);
console.log(uniqueNames); 