const prompt=require("prompt-sync")();

// let x = 1;
// let y = '2';
// let z = true;
// let s = x + y;
// console.log(s) // output? 12
// console.log(typeof s) // output?string
// x = x + z;
// console.log(x) // output?2
// console.log(typeof x) // output? number
// y = x++ * y;
// console.log(x); // output?3
// console.log(typeof x); // output? number
// s = parseInt(s)
// s+='3';
// console.log(s); // output? 123
// console.log(typeof s); // output? string
// z= !z;
// console.log(z); // output? flase
// console.log(typeof z); // output? boolean

// let x = 0;
//  x++;
//  console.log(x);//x =1
//  ++x;
//  console.log(x);//x=2
//  console.log(++x);//x=3
//  console.log(x);//x=3
//  console.log(x++);//x=3
//  console.log(x);//x=4



// let x = 5;
// let y = 7+'';
// console.log(x+y);

// let x= 0;
//  let y = "hello";
//  let z = x || "Hi";
//  console.log(z);
//  let w = y || 5;
//  console.log(w);

//  for(let count =1; count<=10; i++){// error code 
//     console.log(count);
//    }
//    console.log(count); // value of count here?

// const prompt = require("prompt-sync")();

// let num;

// for(let x=10;x<100;x++)
// {
//  if (x%3===0 && x%5===0)
//  {
//      x=x;
//      console.log(x)
//  }
 
// }
// let x = 1, y = 7;
// let message = "Hi";
// if (x < 2) {
//  if (y > 7) {
//  message = "Bye";
//  }else{
// message = "HOla";
// }
// } else {
//  message = "Hello";
// }
// console.log(message);


// for(let x=0;x<3;x++)
// {
//     console.log(x)
// } 
// console.log(x)//out of scope variable

let d=0;
while(d<3)
{
    console.log(d)
    d++;
}
let i = 3;
do {
     console.log(i)
     i--
} while (i>2);

 i = 3;
do {
     console.log(i)
     i--
} while (i>3)


let n;
n=prompt("enter the exaxt agge");
n=parseInt(n);

for (;n!=18;){
    n=prompt("enter the exaxt agge");
    n=parseInt(n);
}
console.log("know you are right")


let rand=(Math.random())*6+1;
let z=0;
while(rand<=5)
{
    z=z+rand;
    console.log(z);
    rand=(Math.random())*6+1;
}
console.log(z);
console.log("bingoo");

///reverse 90  degre angle
let np=prompt("enter any number ")
np=parseInt(np);
let  j, k=2*n-2;
 
// outer loop to handle number of rows     
for(i=0; i<np; i++)
{
    let zz=""

    // inner loop to handle number spaces
    for(j=0; j<k; j++)
    {
        // printing spaces first
        
        console.log(zz);
    }
     
    // decrementing k after each loop
    k = k - 2;
     
    //  inner loop to handle number of columns
    //  values changing acc. to outer loop
    for(j=0; j<=i; j++)
    {
        // printing stars
        
        console.log(zz+"* ");
    }
     
    // print new line for next row
    console.log("\n");
}