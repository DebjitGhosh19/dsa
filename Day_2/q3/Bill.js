let unit=Number(prompt("Enter bill units"))
let amount=0

    if (unit>400) {
        amount=amount+((unit-400)*13+(200*8)+(100*6)+(100*4.2))
        console.log(amount);
        
        
    }
    else if (unit>200&& unit<401) {
        amount=amount+((unit-200)*8+(100*6)+(100*4.2))
       console.log(amount);
    }
     else if (unit>100&& unit<201) {
        amount=amount+((unit-100)*6+(100*4.2))
       console.log(amount);
    }
     else if (unit<=100) {
        amount=amount+(unit*4.2)
console.log(amount);
    
}

