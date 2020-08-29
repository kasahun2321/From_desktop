
"use strict";
function rotateRight(array)
{   
    
    let tempA=[];
    let local_temp;
    for (let i=1;i<array.length;i++)
    {
        local_temp=array[array.length-1]
        tempA[0]=local_temp;

        tempA[i]= array[i-1]
        

        //console.log(temp[0]+tempA[i]);
    }
   return tempA
}

let list =[17,8,9,5,20]
let run=rotateRight(list);
console.log(run);
