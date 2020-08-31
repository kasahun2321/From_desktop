"use strict"


function switchCase(s)
{
    /// ThIS FUNCTION convert each substring to if upper to lowecase if lower to upper case.

    let p=s.split("");
     let result=[];
     for(let i=0;i<p.length;i++)
     {
         let x=p[i].toUpperCase();
         let y=p[i].toLowerCase();

         if(p[i]==x)
         {
             result[i]=p[i].toLowerCase();
         }
         else{
             result[i]=p[i].toUpperCase();
         }
     }
 return result.join("");
}

let list="helloAFRICKA23"
let am=switchCase(list);
console.log(am);