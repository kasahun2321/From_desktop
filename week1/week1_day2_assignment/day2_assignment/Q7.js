let ask_user=require('prompt-sync')();
let age=ask_user("Enter your age=");
age=parseFloat(age);
let max_hbt=220-age;

if(age<0 &&  age>150)
{
    console.log("this is not the right input for age ")

}
else if( (age*65)/100>=65 || (age*85)/100<=85){

    console.log("your heart beat is okay keep your practice ")
}
else
{
    console.log("your heart is not okay please try to see your doctor")

}

