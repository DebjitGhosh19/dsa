for (let i = 1; i <= 5; i++) {
  let asci=65
    for (let j = 1; j <=i; j++) {
      process.stdout.write(String.fromCharCode(asci)+" ")
      asci++;
    }
console.log();
}