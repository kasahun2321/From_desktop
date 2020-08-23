    const prompt=require("prompt-sync")();
    let n=prompt("enter the size of you star")
    n=parseInt(n);
    // initialising starting number
    // let i, star, rows=n, space;
		
    // // outer loop to handle number of rows
    // // n in this case
    //  for(i = rows;i >= 1; i--) {
    //     // Printing spaces 
    //     for(space = 0; space <= rows-i; space++) {
    //         console.log(" ");
    //     }
    //     // Printing stars
    //     star = 0;
    //     while(star != (2*i - 1)) {
    
    //         console.log("*");
    //         star++;
    //     }
    //     console.log("\n");
    // }


/////////////////////////////////////////////////////second
// i,
 let i,j,k=2*n-2;
 
// outer loop to handle number of rows     
for(i=0; i<n; i++)
{

    // inner loop to handle number spaces
    for(j=0; j<k; j++)
    {
        // printing spaces first
        console.log(" ");
    }
     
    // decrementing k after each loop
    k = k - 2;
     
    //  inner loop to handle number of columns
    //  values changing acc. to outer loop
    for(j=0; j<=i; j++)
    {
        // printing stars
        console.log("* ");
    }
     
    // print new line for next row
    // System.out.println();
   // console.log("\n")
}