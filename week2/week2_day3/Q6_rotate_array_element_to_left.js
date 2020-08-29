
"use strict";

let list =[12,22,44,55,6,1,6,9,80,90]

function rotateleft(arr)
{ 
    let temp=[];
    let result=arr.length-1;
    for( let i=0;i<result;i++)
    {   temp[result]=arr[0]
        temp[i]=arr[i+1]
        

    }
    return temp;
}

console.log(rotateleft(list));