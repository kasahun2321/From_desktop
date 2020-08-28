

let list =[12,22,44,55,6,1,6,9,80,90]
let leg=list.length;
let count=0;

function countEven(arr)
{
    for(let i=0;i<arr.length;i++ )
    {
        if(arr[i]%2==0)
        {
            count=count+1
        }
    }
 return count;
}

let result =countEven(list)
console.log("totla number of even is the array :"+result);