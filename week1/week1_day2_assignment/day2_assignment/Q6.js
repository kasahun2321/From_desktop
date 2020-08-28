let startup=require('prompt-sync')();
let beging_of_odo_meter=startup("Enter intitail value=")
let ending_odometer=startup("enter final value=")
let gasoline=startup("enter the gas usage=");

beging_of_odo_meter=parseFloat(beging_of_odo_meter);
ending_odometer=parseFloat(ending_odometer);

if (beging_of_odo_meter>=ending_odometer || beging_of_odo_meter<0) 
{
    console.log("this is in apropriate value check your intila input");
}
else 
{
gasoline=parseFloat(gasoline);

let total_distance= ending_odometer-beging_of_odo_meter;

let oilcumsption= total_distance/gasoline;

console.log("your car oil cumsumption is "+ oilcumsption +" mile per galone" );
}