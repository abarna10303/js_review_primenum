
let btns=document.getElementById("btn");
let anss=document.getElementById("ans");
btns.addEventListener("click",e=>{
    let num=parseInt(document.getElementById("number"))
    e.preventDefault();
let a=0;
for(i=1;i<=num.value;i++){
    if(num.value%i==0)
    {
        a=a+1;
    }
}
if(a==2)
{
    anss.innerText="This Number is Prime Number";
    console.log("hi");
}
else
{
    anss.innerText="Not a prime Number";
}
})