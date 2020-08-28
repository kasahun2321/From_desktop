const prompt=require("prompt-sync")();
let input=prompt("Enter a number correspond to the gift order")
input=parseInt(input);

const gift_list=[
    "1 partridge in a pear tree",
    "2 two turtle doves",
    "3 three French hens",
    "4 four calling birds",
    "5 five golden rings",
    "6 six geese a laying",
    "7 seven swans a swimming",
    "8 eight maids a milking",
    "9 nine ladies dancing",
    "10 ten lords a leaping",
    "11 eleven pipers piping",
    "12 twelve drummers drummin"]
    
switch(input)
{
    case 1:
        console.log(gift_list[1])
        break;
    case 2:
        console.log(gift_list[2])
        break;
    case 3:
        console.log(gift_list[3])
        break;
    case 4:
        console.log(gift_list[4])
        break;
    case 5:
        console.log(gift_list[5])
        break;
    case 6:
        console.log(gift_list[6])
        break;
    case 7:
        console.log(gift_list[7])
        break;
    case 8:
        console.log(gift_list[8])
        break;
    case 9:
        console.log(gift_list[9])
        break;
    case 10:
        console.log(gift_list[10])
        break;
    case 11:
        console.log(gift_list[11])
        break;
    case 12:
        console.log(gift_list[12])
        break;
     default:
        console.log("you entered wrong number ")
        
        
       
}

/*  to display all we use this for loop
for(let i=0;i<gift_list.length;i++)
{
console.log(gift_list[i])
}
*/

//const p=["add()","mult()"];
