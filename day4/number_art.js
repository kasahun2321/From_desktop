
const input = require("prompt-sync")();
let i,j;

for (i=1; i<=5;i++)
{
  let z="";
    for(j=0;j<5;j++)
    {
      z+=i+""; 
      //console.log(z); 
    
      
    }
    console.log(z)
 }
//traingle star 
let limit='';
let user=input("what is the max star");
user=parseInt(user)

for (let i=user;limit>-1;limit--)
{
  let result="";
  for(let j=i;j>=1;j--)
  {
    result +="*";
    console.log(result);
  }

}

//////////// printing 12345 in horizoantal

for (i=1; i<=5;i++)
{
  let z=1;
    for(j=1;j<=5;j++)
    {
      z+=j+"";  
      
    }
    console.log(z+"\t"); 
}

///triangle number
for (i=1; i<=5;i++)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=j+"";  
      
    }
    console.log(z+"\t");
}

// /// very excepetional pattern.
/*5
55
555
4
44
444
3
33
333
.....*/
for (i=5; i>=1;i--)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=i+"";  
      console.log(z+"\t");
    }
    
}
//////
/*
1
12
123
1234
12345
*/
for (i=1; i<=5;i++)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=i+"";  
      
    }
    console.log(z+"\t"); 
}

// amazing pattern


/*l
last pattern
55555
4444
333
22
1
*/

for (i=5; i>=1;i--)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=i+"";  
      
    }
    console.log(z+"\t"); 
}