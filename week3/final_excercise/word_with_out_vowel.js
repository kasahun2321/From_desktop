
let p=["hello" ,"krm","sew"]

let x= "aeiouAEIOU"
let temp=[]
let  i=0;
for( i=0;i<p.length;p++)
{
    let k=p[i].length;
    for(let j=0;j<k;j++)
    {
        let c=p[i][j];
        if(x.indexOf(c)!==-1)
        {
            temp[i]=p[i][j];
        }

    }
}
console.log(temp)