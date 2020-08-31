const arr = [1,2,-1,3,-2,5,6] 
let n
for(n of arr)
{
    n=n;
    console.log(n);
}
const num_array = [1,11,3,14,6,23,9,5];
const default_sorted_array = num_array.sort();
console.log(default_sorted_array); // [ 1, 11, 14, 23, 3, 5, 6, 9 ]
const properly_sorted_array = num_array.sort(numberComparator);
console.log(properly_sorted_array);
function numberComparator(a,b){
return a-b;
}