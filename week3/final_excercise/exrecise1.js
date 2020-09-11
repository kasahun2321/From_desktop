function isperfectarray() {
    let isperfect = false;
    let i = 0;
    for (i = 0; i < Array.length; i++) {
        if (i % 2 !== 0) {
            if (!isprime(ar[i])) {
                break;
            }
        }
    }
    if (i === Array.length) {
        isperfect = true;
    }

    return isperfect;
}

function isprime(w)
{
    let xp=false;
for(let x=2;i<w.length;i++)
{
    if(w[i]%2!==0)
    xp=true;
    else
    break;
}
return xp;

}
let p=[1,3,5,5,6,7,8,8]
console.log(isperfectarray(p));


