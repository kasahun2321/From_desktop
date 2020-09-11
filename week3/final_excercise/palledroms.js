let prompt=require("prompt-sync")();
let x=prompt("enter the word");
x=x.toLowerCase();
let y=x;
let n=x.length-1
let ans=true;
for(let i=0;i<n;i++)
{
    
    if(x[i]!==y[n--])
        {
            ans=!ans;
           break;
        }
    else
    {
        ans=ans;
    } 
      
        
     
}
console.log(ans)

