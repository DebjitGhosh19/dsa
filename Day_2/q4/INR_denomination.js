// let amount=Number(prompt("Enter a value"))

let amount =4888
let count=0;
if (amount>=500) {
   count= Math.floor(amount/500)
   console.log("500 =", count);
   amount=amount%500
   console.log(amount);
   
}
if (amount>=200) {
      count= Math.floor(amount/200)
   console.log("200 =", count);
   amount=amount%200
   console.log(amount);
}
if (amount>=100) {
      count= Math.floor(amount/100)
   console.log("100 =", count);
   amount=amount%100
   console.log(amount);
}
if (amount>=50) {
      count= Math.floor(amount/50)
   console.log("50 =", count);
   amount=amount%50
   console.log(amount);
}
if (amount>=20) {
      count= Math.floor(amount/20)
   console.log("20 =", count);
   amount=amount%20
   console.log(amount);
}
if (amount>=10) {
      count= Math.floor(amount/10)
   console.log("10 =", count);
   amount=amount%10
   console.log(amount);
}
if (amount>=5) {
      count= Math.floor(amount/5)
   console.log("5 =", count);
   amount=amount%5
   console.log(amount);
}
if (amount>=2) {
      count= Math.floor(amount/2)
   console.log("2 =", count);
   amount=amount%2
   console.log(amount);
}
if (amount>=1) {
      count= Math.floor(amount/1)
   console.log("1 =", count);
   amount=amount%1
   console.log(amount);
}