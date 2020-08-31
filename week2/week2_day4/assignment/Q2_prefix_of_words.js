"use strict"
function prefix(a,b)
{ 
   let temp=[];
   let la=a.length;
   let lb=b.length;
   let lent=(lb<la)?lb:la;
   for(let i=0;i<lent;i++)
   {
    if (a[i]===b[i])
    {
        temp[i]=a[i];
    }
    else{
      break;
    }

   }
   return temp.join("");
}

let list="disable";
let list2="distateful";
let result=prefix(list,list2)
console.log(result);


/////////////////////
function prefix(str1, str2) {
    let retu = ""
    let length = Math.min(str1.length, str2.length)
   
    for (let a = 0; a < length; a++) {
      if (str1[a] === str2[a]) {
        retu += str1[a];
      } else {
        break;
      }
    }
    return retu;
  }
  console.log(prefix("asmer", "asmpl"))