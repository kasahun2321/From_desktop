const arr1 = [1,2,3,4,5,6,7,8,9,10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const arr_sum = arr1.reduce(reducer);
console.log(arr_sum);


// in old style 

let accumlate=0,reduce;
function accumulator()
{
for (let i=0;i<arr1.length;i++)
{
accumlate+=arr1[i]
}
return accumlate
}

let res=accumulator(arr1);
console.log(res);

