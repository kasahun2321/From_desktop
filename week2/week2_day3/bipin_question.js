
    

// function countEvens(arr){
// //  let sum = 0;
//  let tmp_arr = [];
//  let j = 0;
// for (let i = 0 ; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//       // sum = sum + 1;
//       tmp_arr[j] = arr[i];
//       j= j + 1;
//     }
      
//   }
//   return tmp_arr;
//   // return sum;
// }
 
// let list = [17,8,9,5,20];
// let count = countEvens(list);
// console.log(count);




// "use strict";
 
let x = "disable";
let y = "distasteful";
 
function prefix(a, b) {
  let arr = a.split("");
  let brr = b.split("");
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === brr[i] )
    {
      sum = sum + arr[i]
    }
  }
  return sum;
}
 
let output = prefix(x,y);
console.log(output);
