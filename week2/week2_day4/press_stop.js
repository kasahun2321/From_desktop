'use strict';


const p=require ("prompt-sync")();
let  input=p("enter YOUR COMMAND ");
input=input.toLowerCase();


// while( input!=='stop')
// {
//     input=p("enter same text ")
   
// }

// console.log("know it is stoped");
// /// same problem using do while and wbhile loop

// do{
//     input=p("enter YOUR COMMAND ");
// input=input.toLowerCase();
// }

// while( input!=='stop')

// console.log("know it is do while stop stoped");


// let csv_file=p("enter your comma separated file")
// let words=csv_file.split(',');
// words.reverse();
// reveresedstring=words.join('-');
// console.log("array with comma ["+words+"]");
// console.log("array with dathline "+reveresedstring+"]");

////
let forr=p("enter your comma separated file")

var res = forr.replace("for", "4");
console.log(res)