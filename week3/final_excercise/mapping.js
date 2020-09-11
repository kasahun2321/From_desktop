

function sumdigit (num)
{
    let n=num;
    let sum=0;

    while(n>0)
    {

        sum+=n%10;
        n=Math.floor(n/10);
    }


return sum;
}
console.log([1,36,49,7].map((n)=>sumdigit(n)));