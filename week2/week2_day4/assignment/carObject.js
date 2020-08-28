let car={
    make:"",
    model:"",
    year:"",
    odometer:0,
    serviceCount:0,
    service:function(){},
    odometercount:function(){},
    reset:function(){}    

}

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

function service()
{
    return 0;

}
function odometercount()
{
 return 0;
}
function reset()
{
return 0;
}

let callcar=car.service();
console.log(callcar);