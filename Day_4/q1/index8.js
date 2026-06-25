let n=5
for (let i = 1; i <=n; i++) {
 for (let j = 1; j <= 2*n-1; j++) {
   if (i==j||i+j==n*2) {
    process.stdout.write("*")
   }
   else{
    process.stdout.write(" ")
   }
 }
 console.log();
}