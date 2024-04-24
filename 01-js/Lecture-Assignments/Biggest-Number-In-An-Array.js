const num=[923 , 856 ,76, 171, 874 ,326 ,883 ,256 ,170 ,865,646]
let l= num.length;
let big=0;

for (let i=0;i<l;i++)
{
    if (num[i]>big)
    big =num[i]
}

console.log("Biggest number in the Array is " + big)