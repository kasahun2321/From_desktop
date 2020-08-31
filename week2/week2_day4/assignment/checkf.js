function fibonacci(n)
{
    let fib=[];
    let i;
    fib[0]=0;
    fib[1]=1;
    for(i=2;i<n;i++)
    {
        fib[i]=fib[i-2]+fib[i-1]
    
 
    }
    return fib;
}
function addFib(x)
{
    let a=x;
    let sum=0;
    for (let i=0;i<x.length;i++)
    {
    
    sum=sum+a[i];
    
}
return sum;
}
let n=4;
let x=fibonacci(n);
console.log(addFib(x));
console.log(x);

 
