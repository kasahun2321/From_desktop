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
/* pattern
1
22
33*/
 for (i=1; i<=5;i++)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=i+"";  
      
    }
    console.log(z+"\t"); 
}
 ///triangle number
 /*
 1
 12
 123
 1234
 12345*/
for (i=1; i<=5;i++)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=j+"";  
      
    }
    console.log(z+"\t");
}
/*
55555
4444
333
22
1*/

for (i=5; i>=1;i--)
{
  let z="";
    for(j=1;j<=i;j++)
    {
      z+=i+"";  
      
    }
    console.log(z+"\t"); 
}