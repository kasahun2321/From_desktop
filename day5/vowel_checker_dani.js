const prompt = require("prompt-sync")();
let user_input=prompt("please enter string")

function vowel_count(str1)
{
  var vowel_list = 'aA';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count(user_input));
//document.write("document .wright exalmpe")


// vowel counter in different way 


let k=  prompt("what is the vowel you are looking for ")
let hdk=0;
for (let p=0;p<user_input.length;p++)
{
  if(user_input[p]===a || user_input[p]===e||user_input[p]===i||
    user_input[p]===o||user_input[p]===u)
    {
      hdk+=1;
    }
}
console.log(hdk)