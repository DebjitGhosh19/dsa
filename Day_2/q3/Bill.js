let unit=Number(prompt("Enter bill units"))
let amount=0
while (unit>0) {
    if (unit>400) {
        amount=amount+((unit-400)*13)
        unit=unit-400;
    }
    else if (unit>200&& unit<401) {
        amount=amount+((unit-200)*8)
        unit=unit-200;
    }
     else if (unit>100&& unit<201) {
        amount=amount+((unit-100)*6)
        unit=unit-100
    }
     else if (unit>100) {
        amount=amount+((unit-100)*4.2)
        unit=unit-100
    }
}
console.log(Math.floor(amount));
