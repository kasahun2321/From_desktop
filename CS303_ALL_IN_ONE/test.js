/* eslint-disable id-length */
"use strict"
const kas={};
kas.name="kasahun";
kas.acheivement="degree";
kas.hoppy="soccer";
console.log(kas);

const biruk={
    name:"biruk",
    age:"25",
    departemetn:"social study",

    acheivement :{
        acadamic:"gold" ,
        sport:"brozze" ,
        creavity:"event organizaer"
    }
}

console.log(biruk.name);
console.log(biruk.acheivement.sport);
console.log(delete biruk.name);


// let brown=10;//114
// function somefun(blue)
// {
//     let green=18;
//     if(blue>=brown)
//     {
//         blue=Math.sqrt(blue);
//     }
//     brown=green + blue;
//     console.log(blue + "" + green + " "+brown);//_6 108 144_
//     return blue;
// }
// console.log(brown)
// console.log(somefun(36))
// console.log(brown)
// console.log(green)


let myObj = {
    user1: {
   fname : "john",
   lname : "doe"
    },
    user2: {
   fname : "john",
   lname : "doe"
    },
    /**
     * 
     * @returns{undefined}
     */
    equals: function() {
    return this.user1 === this.user2;
    }
   }
   console.log(myObj.equals());

   /**
    * @randomels
    * 
    */