
let list =[12,22,44,55,6,1,6,9,80,90]
let leg=list.length;

// function inside a function 
function multiply(list, multiplier)
{
    /// the bellow code is affow function which multiply ht array iwth same conaatsnt number 
    const doubled_arr = list.map(n => n*multiplier);
    return doubled_arr;


}

let result=multiply(list,3);
console.log(result)