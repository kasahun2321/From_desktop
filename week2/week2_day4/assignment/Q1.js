"use strict"

function ExtractGivenName(fullname)
{
let name=fullname.split(",")
return name[0];

}

const personal_data="Kasahun, Tehone, Belaye";
let given_name=ExtractGivenName(personal_data);
console.log("Given name :"+given_name)