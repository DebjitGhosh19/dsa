// const arr=[1,2,3,4,5]
// arr.forEach(function(val){
//   console.log(val+" Hello");
  
// })

// const arr=[1,2,3,4,5]
// const newArr=arr.map((val)=>{
//   return  val+12
// })
// console.log(newArr);

// const arr=[1,2,3,4,4,5]
// const newArr=arr.filter((val)=>{
//   if (val>3) {
//     return true
//   }
//   else{
//     return false
//   }
// })
// console.log(newArr);
// const arr=[1,2,2,3,4,5]
// const newArr=arr.find((val)=>{
//   if (val==2) {
//     return val
    
//   }
// })

// console.log(newArr);

//  const arr=[1,2,3,4,5]
//  console.log(arr.indexOf(2));
 


const obj={
  name:"Debjit",
  age:23
}
console.log(obj.name);
console.log(obj['age']);
Object.freeze(obj)
obj.name="Ram"
console.log(obj.name);
