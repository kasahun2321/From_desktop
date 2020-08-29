"use strict";

function addEnds(listArray)
{
    let k=listArray.length;
    let sum = listArray[0]+listArray[k-1]
    return sum;
}

const given_array=[12,3,5,6,7,8,9];
console.log("the sum of first and last array="+addEnds(given_array));