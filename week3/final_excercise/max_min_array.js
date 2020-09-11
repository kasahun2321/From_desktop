
let x=[2,4,5,1,5,9]
let i=0;
let p=[];

console.log(Math.min.apply(Math, x));
console.log(Math.max.apply(Math, x));

function minmax (x,y,z)
{
    if(x<y&&x<z)
    {
        return x;
    }
    else if(y<x && y<z)
    {
        return y;
    }
    else
    {
        return z;
    }
}

console.log(minmax(3,5,1))
console.log(minmax(1,5,1))
console.log(minmax(0,7,1))