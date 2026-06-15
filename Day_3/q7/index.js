//Strong number

// 145 1!+4!+5!=145

function fac(n) {
    let i=1;
    let ans=1;
    while (i<=n) {
        ans*=i;
        i++
    }
    console.log(ans);
    
    return ans
}

let result=0;
let num=145
while (num>0) {
    let rem=num%10;
    result+=fac(rem)
  num=  Math.floor(num/10)
}
console.log(result);



 