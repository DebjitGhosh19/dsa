// 1.Get Passing Students
// Given an array of marks, return only the marks greater than or equal to 40.

const marks = [12, 45, 67, 33, 89, 40, 25, 77, 38, 59];

const ans1=marks.filter((m)=>{
  if (m>=40) {
    return true
  }
})
console.log(
  ans1
);

// Filter Even Numbers
// From an array of numbers, return only even numbers.
const numbers = [12, 7, 19, 24, 33, 46, 55, 68, 71, 80];

const env=numbers.filter((n)=>{
  if (n%2==0) {
    return true
  }
})
console.log(env);

// Filter Products Under Budget
// Given an array of product objects with price, return only those under ₹500.
const products = [
  { id: 1, name: "Pen", price: 20 },
  { id: 2, name: "Notebook", price: 60 },
  { id: 3, name: "Water Bottle", price: 350 },
  { id: 4, name: "Headphones", price: 799 },
  { id: 5, name: "USB Cable", price: 199 },
  { id: 6, name: "Power Bank", price: 1200 },
  { id: 7, name: "Charger", price: 450 },
  { id: 8, name: "Backpack", price: 999 }
];
const Products_Under_Budget=products.filter((p)=>{
  if (p.price<500) {
    return true
  }
})
console.log(Products_Under_Budget);

// Remove Empty Strings
// From an array of strings, remove empty and whitespace-only strings.
const strings = ["apple", "", "banana", "   ", "cherry", " ", "mango", "", "grape"];
const emStr=strings.filter((s)=>{
  if (s.trim()!=='') {
    return true
  }
})
console.log(emStr);

// Filter Adults
// From an array of ages, return those who are 18 or older.

const ages = [12, 17, 18, 20, 15, 25, 30, 14, 19, 40];

const FilterAdults=ages.filter((a)=>{
  if (a>=18) {
    return true
  }
})
console.log(FilterAdults);
