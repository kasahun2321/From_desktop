let car={
    make:"korea",
    model:"KEA",
    year:"2012",
    odometer:0,
    serviceCount:0,
    service:function(timer){
     let count=timer;
     count=count+1;
      return count;

    },
    getodometerreading:function(mile){
      let millage=mile;
      return millage;
    },
    reset:function(x,y){

      let servicetime=x*0;
      let milleageodometer=y*0;
      return [servicetime,milleageodometer];


    }    

}

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

let a=car.make;
let b=car.model;
let c=car.year;
let d=car.serviceCount.service();
let e=car.odometer.getodometerreading();
let f=car.reset()

const whole=[a,b,c,d,e];
console.log(whole)
console.log("the service and odometer reades"+f)