
const scores = [];
for (let i=0; i<10; i++){
scores[i] = Math.ceil(Math.random()*100);
}
console.log(scores);

///////////



function find_average(arr)

{
    //let x=testnumber.length;
    let average=0;

for(let i=0;i<arr.length;i++)
{
average=average+arr[i]
}
return average/arr.length;
}


const test=[10,20,30,40,50];

let result=console.log(find_average(test))


const second_array=[];

for(let i=0; i<10;i++)
{
second_array[i]=Math.ceil(Math.random()*10);

}

let second_result=console.log(find_average(second_array));


//console.log("the stattic array value ="+result);
//console.log("the random array value is ="+second_result)

