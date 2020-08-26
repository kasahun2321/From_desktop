const num_array = [1,11,3,14,6,23,9,5];
// const default_sorted_array = num_array.sort();
// console.log(default_sorted_array); // [ 1, 11, 14, 23, 3, 5, 6, 9 ]
// const properly_sorted_array = num_array.sort(numberComparator);
// console.log(properly_sorted_array);
// function numberComparator(a,b){
// return a-b;
// }


let arreay1=[11,4,356,87,9]
let number =function(a,b)
{
    return a-b;
}

let refactor=(a,b)=>a-b;

console.log(refactor(num_array));
console.log(number(arreay1));