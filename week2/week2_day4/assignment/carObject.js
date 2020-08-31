let car={
    make:"korea",
    model:"KEA",
    year:"2012",
    odometer:2300,
    serviceCount:2,
    service:function(){
     let count=this.serviceCount+1;
      return count;

    },
    getodometerreading:function(){
     
      return this.odometer;;
    },
    reset:function(){

      let servicetime=this.serviceCount*0;;
      let milleageodometer=this.odometer*0;
      return [servicetime,milleageodometer];


    }    

}



let a=car.make;
let b=car.model;
let c=car.year;
let d=car.service();
let e=car.getodometerreading();
let f=car.reset()

const car_data=[a,b,c,d,e];
console.log(car_data)
console.log("the service and odometer reades:"+"the service count:"+f[0]+"   Odometer reader "+f[1])