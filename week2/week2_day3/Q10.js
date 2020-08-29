const prompt=require("prompt-sync")();
let input=prompt("Enter a number correspond to the gift order")
input=parseInt(input);

const gift_list=[
    " one partridge in a pear tree",
    " two turtle doves",
    " three French hens",
    " four calling birds",
    " five golden rings",
    " six geese a laying",
    " seven swans a swimming",
    " eight maids a milking",
    " nine ladies dancing",
    " ten lords a leaping",
    " eleven pipers piping",
    " twelve drummers drummin"]

    let  days =["first day","second day","thrid day","forth day","fivth day ","sixth day",
                "seventh day","eighth day","ninth day","tenth day","elventh day","twelveth day"]

    let song=`On the ${ days[input-1] }of Christmas, my true love gave
    to me:`

    function giftlistmenu(input)
    {
    let giftlists=[];
    let k=input-1;
    for(let i=0;i<=k;i++)
    {
        
        giftlists[i]=gift_list[k-i];

    }
 return giftlists;
}

    console.log(song +","+ giftlistmenu(input));
// switch(input)
// {
//     case 1:
//         console.log(gift_list[1])
//         break;
//     case 2:
//         console.log(gift_list[2])
//         break;
//     case 3:
//         console.log(gift_list[3])
//         break;
//     case 4:
//         console.log(gift_list[4])
//         break;
//     case 5:
//         console.log(gift_list[5])
//         break;
//     case 6:
//         console.log(gift_list[6])
//         break;
//     case 7:
//         console.log(gift_list[7])
//         break;
//     case 8:
//         console.log(gift_list[8])
//         break;
//     case 9:
//         console.log(gift_list[9])
//         break;
//     case 10:
//         console.log(gift_list[10])
//         break;
//     case 11:
//         console.log(gift_list[11])
//         break;
//     case 12:
//         console.log(gift_list[12])
//         break;
//      default:
//         console.log("you entered wrong number ")
        
        
       
// }

/*  to display all we use this for loop
for(let i=0;i<gift_list.length;i++)
{
console.log(gift_list[i])
}
*/

//const p=["add()","mult()"];


