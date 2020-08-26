const arr1 = [1,5,7,9];
const doubled_arr = arr1.map(n => n*2);
console.log(doubled_arr);



// if the above code is convert into longer annonous formatev
const arr2 = [1,5,7,9,89,90];
const doubled_arr2 = arr2.map(function mapper(n)
{
    return n*2
}
);
console.log(doubled_arr2);
