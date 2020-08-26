const arr1 = [1,5,7,9];
function doubleEveryElement(arr){
const temp_arr = [];
for(let i =0; i<arr.length; i++){
    //in other case n=ar[i] then n=n*2
temp_arr[i] = arr[i]*2;
}
return temp_arr;
}
const doubled_arr = doubleEveryElement(arr1);
console.log(doubled_arr);