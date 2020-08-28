


let list =[12,22,44,55,6,1,6,9,80,90]

function rotateleft(arr)
{ 
    let temp=[];
    let result;
    for( let i=0;i<arr.length;i++)
    {   temp[arr.length]=arr[0]
        temp[i]=arr[i+1]
        //result=temp[i]+temp[arr.length-1]

    }
    return temp;
}

console.log(rotateleft(list));