"use strict"
//////////
function suffix(str1, str2) {
    let retu = ""
    let count = 0;
    let len_1 = str1.length;
    let len_2 = str2.length;
   
    while (true) {
      if (str1[len_1 - 1 - count] === str2[len_2 - 1 - count]) {
        retu = str1[len_1 - 1 - count] + retu;
        count++;
      } else {
        break;
      }
    }
    return retu;
  }
   
  console.log(suffix("morning", 'evening'))