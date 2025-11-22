//calculate area and perimeter of rectangle
 let b=10
 let h=15
 console.log("Area=", b*h);
 console.log("perimeter=", 2*(b+h));
 //Generate OTP
 console.log(Math.floor(Math.random()*9000+1000));
 
 //area of triangle by heron's formula

const A=4
const B=5
const C=6
const S=(A+B+C)/2 
console.log(S);

 console.log("area of triangle by heron's formula  = ",( Math.sqrt(S*(S-A)*(S-B)*(S-C))).toFixed(1) );
 
