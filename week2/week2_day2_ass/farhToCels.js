const con=require("prompt-sync")();
let number =con("Enter the value in degree farhnaite");
number=parseFloat(number);
let Celsius_scale;

function farhToCels  (fara)
{
    
    Celsius_scale= (fara - 32) / 1.8
    console.log(fara+"^F"+" in  celcies scale :"+Celsius_scale +" C")


}

farhToCels(number)
