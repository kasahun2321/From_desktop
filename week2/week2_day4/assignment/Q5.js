function titled(s)
{
    let temp=s;
    /// this function return the giver array by convertig the first letter of the array to capitla
    for(let i=0; i<temp.length;i++)
    {
        temp[i]=temp[i][0].toUpperCase()+temp[i];

    }
return temp;
}

let list=["abebe","beso","bela","chala","chube","chebete"];
let result=titled(list);

console.log(result);