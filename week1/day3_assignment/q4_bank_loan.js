let userinput=require('prompt-sync')();

let total =userinput("what is total cost of the house   :");
total=parseFloat(total)
let downpayment;
if(total>0 && total<49999.99)
{
downpayment=0.05*total;

}
else if(total>=50000&& total<99999.99)
{
downpayment=2000+(0.1*(total-50000))
    
}
else if(total>=100000&&total<199999.99)
{
    let p=total-100000;
    downpayment=7500+(0.2*p)   
}
else 
{
    downpayment=27500+((25/100)*(total-200000))   
}
console.log("downpayment of "+"="+"\t"+downpayment)