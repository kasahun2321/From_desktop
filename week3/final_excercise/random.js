
let prompt = require("prompt-sync")();

let i = 0, x=[];
for (i = 0; i < 2; i++) {
    x[i] = prompt("enter the" +(parseInt(i)+1) + " order number you want")
     x[i] = parseFloat(x[i]);
}
parseFloat
console.log(x)

let px=[11,2,4,5]
px.push(22,33,44)

console.log(px);


const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {  
  console.log(number);
});

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];


const announcements = numbers.map(member => {
  return member *2;
})

console.log(announcements);

let p=new Array(6)
let v=p.length;
console.log(v)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());        // First sort the elements of fruits
console.log(fruits.reverse()); 

///https://www.w3schools.com/js/js_array_iteration.asp
