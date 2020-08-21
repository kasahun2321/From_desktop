
let i,j,z;
for (i=1; i<=5;i++)
{
    for(j=0;j<=5;j++)
    {
      z=i;  
      console.log(z);
    }
}


//////////// printing 12345 in horizoantal
//let i,j,z;
for (i=1; i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
      z=j;  
      console.log(z+"\t");
    }
    
}

///triangle number
for (i=1; i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
      z=j;  
      console.log(z+"\t"+z);
    }
    console.log("\t");
}