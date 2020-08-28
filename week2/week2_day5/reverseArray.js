

let input =["abebe","beso","bela",12,23,30]
let data="she said hi and i replied  hi";
function arrayreverse(arr)
{
  temp=[];
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        temp[i]=arr[n-i];


    }
    return temp;

}
let result=arrayreverse(input)
console.log(result);


////////////////splict string array into different 
function replaceall(original_string,string_to_be_replaced,replacemnt_string)
{
    let word = original_string.split(" ");
    let l=word.length;

    for(let i=0;i<=l;i++)
    {
        if (word[i]===string_to_be_replaced)
        {
            word[i]=replacemnt_string;
        }
    }
return word.join(" ");
}


let out2=replaceall(data,"hi","hello")
console.log(out2);


//same thin using arrow fucntion watch  freday 08/28/2020 vedio    



