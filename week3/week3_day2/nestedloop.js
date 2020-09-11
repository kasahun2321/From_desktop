
let arr = [[21, 3, 5],
[12, 5, 6],
[4, 6, 8]]

let sum = 0;

for (let i = 0; i < arr.length; i++) {

    arr[i].forEach(Element=> { sum = sum + Element; });

}

console.log(sum);




// let weight=40;
// let cost=0

// let message=""
// if(weight<=23)
// {
//     message="free"
// }
// else if(weight>23 && weight<30)
// {
//     cost=20;
//     message="cost of charge";
// }
// else{

//     cost=20+((weight-30)*5);
//     message="weight="
// }

// console.log(weight+message+"cost "+"will be="+cost +"$");