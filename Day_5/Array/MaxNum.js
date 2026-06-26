const arr=[10,12,5,58,59,6,99]
let max=arr[0]
for (let index = 1; index < arr.length; index++) {
    
    if (arr[index]>max) {
        max=arr[index]
    }
  
}
console.log(max);
