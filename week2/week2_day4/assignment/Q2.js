"use strict"
function prefix(swimming,walking)
{
    /// from the list of array then deretmine the string which have same string prefix dis
let x=swimming.split("");
let y=walking.split("")
let o=x.length-3;
let p=y.length-3;
let result=[];
for(let i=o;i<o+3;o++)
{    result=[];
    if(x[o]==y[p])
    {
        result[o]=x[o];
        p++;
    }
}

return result;

}

let list=["disable","distateful"];
let xx="walking";
let yy="swimming";

let z=prefix(xx,yy);
console.log(z);