// Find the Index of a City
// Given an array of cities, find the index of "Kolkata".

const cities = ["Mumbai", "Delhi", "Chennai", "Kolkata", "Bangalore", "Hyderabad"];

const Find_the_Index_of_a_City=cities.indexOf('Kolkata')


console.log(Find_the_Index_of_a_City);


// Check If Item Exists
// Given an array of fruits, return the index of "mango", or -1 if not found.
const fruits = ["apple", "banana", "orange", "grapes", "mango", "papaya"];
const Exists=fruits.indexOf('mango')
console.log(Exists);

// First Appearance of a Number
// In an array with repeated numbers, find the index of the first 5.
const numbers = [3, 8, 5, 12, 5, 7, 5, 20];
const Appearance =numbers.indexOf(5)
console.log(Appearance);

// Find Index in a To-Do List
// Given an array of tasks, find index of "Finish homework".
const tasks = [
  "Wake up",
  "Brush teeth",
  "Finish homework",
  "Go to college",
  "Do coding practice",
  "Sleep"
];
const Finish_homework=tasks.indexOf("Finish homework")
// Search from Specific Position
// Use indexOf with startIndex to find "a" in "banana" represented as an array of chars.

const chars = ["b", "a", "n", "a", "n", "a"]


console.log(chars.indexOf('a'));
console.log(chars.indexOf('a',2));
console.log(chars.indexOf('a',4));