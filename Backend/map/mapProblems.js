// Convert Temperature Units

const Celsius=[12,54,7,78,66,99];
const Fahrenheit=Celsius.map((c)=>(c*9/5+32))
console.log(Fahrenheit);

// Extract First Names

const fullName=["Debjit Ghosh","Dipika Das","Dip Majhi"]

const firstName=fullName.map(fn=>(fn.split(" ")[0]))
console.log(firstName);



// Square the Numbers

const num=[12,54,7,78,66,99];
const sq=num.map((n)=>(n*n))
console.log(sq);

// Add 10% Tax to Product Prices
const prices=[12,54,7,78,66,99];
const totalPrice=prices.map((n)=>(n*110/100))
console.log(totalPrice);

// Create User Greetings
const userName=["Debjit","Dip","Dipika"]
const Greetings=userName.map((un)=>(`Hello, ${un}!`
))
console.log(Greetings);


