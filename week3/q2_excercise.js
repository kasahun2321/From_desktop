let num=321398;
let y=0;
let z=0;
for (let i=0;i<10;i++)
{
    let r=num/10;
    z+=(r-Math.floor(r))*10
    

    num=Math.floor(r)  
    if (num<10)
    {
        z=z+num;
        break;
    }  


    
}

console.log(z);


////exrecise digit sum 
function sumofdigit(num)
{
    let sum=0;
    while(num>0)

    {
        sum+=num%10
        num=Math.floor(num/10);

    }

    return sum;
}
console.log(sumofdigit(num))

console.log([12,12,11,34,34,2].map(n=>sumofdigit(n)));