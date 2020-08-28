let list =[12,22,44,55,6,1,6,9,80,90]
let leg=list.length;
let middle=0;


function getmidle(arr,lengtht)
{
    if (lengtht%2==0)
    {
        let a=(lengtht/2)-1
        let b=a+1;
        middle+=(arr[a]+arr[b])/2
    }
    else 
    {
        let c=Math.floor(lengtht/2);
        middle=arr[c];
    }

    return middle;



}

let result=getmidle(list,leg)
console.log(result);