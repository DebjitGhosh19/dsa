let arr=[10,2,88,8,62,2]
let max=Math.max(arr[0],arr[1]);
let min=Math.min(arr[0],arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i]>max) {
    min=max
    max=arr[i]
  }
  else if(arr[i]<max&&arr[i]>min){
min=arr[i]
  }
    
}
console.log(min);
