const arr = [1,2,-1,3,-2,5,6] 

//us ing arrow function and filter function 
const number_above_zero = arr.filter(n=> n >= 0);
console.log(number_above_zero);

/// filtering based on the filter methos and for loop 
function filter_positive_number(arr,filter_function){
let j=0;
let temp=[];
for (let i=0; i<=arr.length;i++)
{
    if (filter_function <arr[i])//error need same modofction
    
    {
        console.log(arr[i])
        j=j+1;
    }
}

}
///using filter fuction and shorter method of arrow function
let filter_array=arr.filter (function(){return n>0});
console.log("the filterde output ="+filter);

