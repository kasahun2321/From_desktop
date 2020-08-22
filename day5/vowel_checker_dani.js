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