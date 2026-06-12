//prime number
let num=Number(prompt("Enter your number"))
let count=0;
if (num>0) {
for(let i=1;i<=num;i++){
    if (num%i==0) {
        count++
    } 
}
if (count>2) {
    console.log("Not a prime number");
    
}
else{
    console.log("Prime number");
    
}
}