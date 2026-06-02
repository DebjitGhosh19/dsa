let amount=Number(prompt("Enter your bill amount"))
if (amount<0) {
    console.log("Enter a positive number");
    
}
else if (amount>=0&& amount<=5000) {
    console.log("Final bill: ", amount);
    
} else if (amount>5000&&amount<=7000) {
    console.log("Final bill: ", amount*95/100);
    
} else if (amount>7000&&amount<=9000) {
    console.log("Final bill: ", amount*90/100);
    
} 
else if (amount>9000) {
    console.log("Final bill: ", amount*80/100);
    
} 