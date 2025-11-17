// Find a Student by Roll Number
const arr=[{
  name:"Debjit",
  roll:1
},
{
  name:"Deb",
  roll:2
}
,
{
  name:"jit",
  roll:3
}
,{
  name:"gurjit",
  roll:4
}]

const ans=arr.find((student)=>{
if (student.roll==2) {
  return student
}
})
console.log(ans);



// // Given an array of products with inStock boolean, find the first product that is out of stock.

const products = [
  { id: 1, name: "Laptop", price: 55000, inStock: true },
  { id: 2, name: "Mouse", price: 499, inStock: true },
  { id: 3, name: "Keyboard", price: 999, inStock: false },
  { id: 4, name: "Monitor", price: 8999, inStock: true },
  { id: 5, name: "Pendrive", price: 599, inStock: false },
  { id: 6, name: "Headphone", price: 1299, inStock: false }
];

const productOutOfStock=products.find((p)=>{
  if (p.inStock==false) {
    return true
  }
})

const productOutOfStock2=products.filter((p)=>{
  if (p.inStock==false) {
    return true
  }
})
console.log(productOutOfStock);
// console.log(productOutOfStock2);


// Filter Products Under Budget Given an array of product objects with price, return only those under ₹500. give me the array
const products2 = [
  { id: 1, name: "Pen", price: 20 },
  { id: 2, name: "Notebook", price: 60 },
  { id: 3, name: "Water Bottle", price: 350 },
  { id: 4, name: "Headphones", price: 799 },
  { id: 5, name: "USB Cable", price: 199 },
  { id: 6, name: "Power Bank", price: 1200 },
  { id: 7, name: "Charger", price: 450 },
  { id: 8, name: "Backpack", price: 999 }
];
const products2UnderBudget=products2.filter((p)=>{
  if (p.price<500) {
    return true
  }

})
console.log(products2UnderBudget);

// // Find a Username
// // Given an array of usernames, find the first one that starts with "dev".

const usernames = [
  "rahul123",
  "dipika_codes",
  "devjit19",
  "coder_aman",
  "devraj07",
  "tech_master",
  "devdeep",
  "arijit_x"
];

const ans3=usernames.find((un)=>{
  if (un.startsWith('dev')) {
    return true
  }
})
console.log(ans3);

// Find the First Prime Number
// From an array of numbers, find the first prime number.


const numbers = [1, 7, 18, 21, 22, 25, 29, 33, 37, 40];

const primeNum=numbers.find((n)=>{
  let j=0
  for(let i=1;i<=n;i++){
  if (  n%i==0) {
    j++
  } 

  }
  if (j==2) {
    return true
  }
})
console.log(primeNum);

