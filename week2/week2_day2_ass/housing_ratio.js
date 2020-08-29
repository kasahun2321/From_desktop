"use strict";

const con = require("prompt-sync")();
let width = con("Enter the width:");
width = parseFloat(width);
let height = con("Enter the height:");
height = parseFloat(height);
let depth = con("Enter the depth:");
depth = parseFloat(depth);
let sweep = con("Enter the sweep:");
sweep = parseFloat(sweep);


let volume = 0;

// let input=con(`
// ++++++++++++++++++++++++++++++++++++++++++++++
//     please select from the menu list 
// ==============================================
// ====press 1 to calculte the house volume
// ====press 2 to calculte the living volume
// ====press 3 to calculte the roof volume
// ====press 4 to calculte the triangle\n`);
// switch(input)
// {
//     case 1:
//         houseVolume(width,depth,height,sweep);
//         break;

//     case 2:
//         livingVolume(width,depth,height)
//         break;
//     case 3:
//         roofVolume(width,depth,sweep)
//         break;
//     case 4:
//         traingleArea(height,width,sweep);
//         break;
//     default:
//         console.log("user inserted wrong number try again");
// }





function houseVolume(width, depth, height, sweep) {
  volume = livingVolume(width, depth, height) + roofVolume(width, depth, sweep);
  return volume;

}

function livingVolume(width, depth, height) {
  volume = width * depth * height;
  return volume;
}
function roofVolume(width, depth, sweep) {
  volume = traingleArea(depth, sweep, sweep) + width;
  return volume;
}
function traingleArea(sweep , depth) {
  let s = (sweep + sweep + depth) / 2
  let value = s * ((s - sweep) * (s - sweep) * (s - depth));
  volume = Math.sqrt(value);
  return volume;
}

houseVolume(width, depth, height, sweep);
console.log("the volume of the house :" + volume + "m^3");