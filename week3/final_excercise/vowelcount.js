
function vowelcount(string)

{
    let p=string;
    let count=0;
    for (let i=0;i<string.length;i++)
    {
        if(p[i]=='A' || p[i]=='E' ||p[i]=='I' ||p[i]=='O' ||p[i]=='U'
        ||[i]=='a' || p[i]=='e' ||p[i]=='i' ||p[i]=='o' ||p[i]=='u')
        {
            count=count+1;
        }
    }
    return count;


}

let x="Hello ethiiopia how are you tOday"
let p="hi there how are you?"
let y=vowelcount(p);
console.log(y);