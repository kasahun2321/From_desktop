"use strict";
let fruit = ["apple", "ball", "cat"];

let output = [];
function mapping(fruit) {

    for (let i = 0; i < fruit.length; i++) {
        output[i] = fruit[i].length;

    }
    return output;
}
// function callig
mapping(fruit);
/// then printing to the console 
console.log(output)

/// printing out all string length using maping function.
const newMap = fruit.map(n => n.length)
console.log(newMap)
