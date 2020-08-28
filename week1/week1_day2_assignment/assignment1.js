/*You have been asked to write a program that will read from
the keyboard the radius of a circle and will output to the
monitor the diameter, circumference, and area of the circle.*/

//let declare variable 
const pi=3.14;
var area;
var circumference;

var readline =require('readline');
var user_input=readline.createInterface(process.stdin, process.stdout);
user_input.question ("Enter the radius of the circle ", function(radius)
{

    var diameter= radius*radius;
    console.log(`diamemet of the circle is=${diameter}`);
area= (pi * (radius* radius));
console.log(`area of the  circle is=${area}`);
circumference= 2*(pi * radius);
console.log(`circumfreance of  the circle is=${circumference}`);
    process.exit();
})

//console.log(rad);

