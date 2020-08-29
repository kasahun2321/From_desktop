"use strict";

const con = require("prompt-sync")();
let user_input = con("Enter the value in degree farhnaite :");
user_input = parseFloat(user_input);
let Celsius_scale;

function farhToCels(fara) {

    Celsius_scale = (fara - 32) / 1.8;
    return Celsius_scale;
}

let result = farhToCels(user_input);
console.log(user_input + " ^F " + "to  celcies scale :" + result + " ^C")
