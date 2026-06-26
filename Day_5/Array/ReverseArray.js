// let arr=[10,20,3,0,40,5,7]
// let RArray=[]
// for (let index =arr.length-1; index >=0 ; index--) {
//     RArray.push(arr[index])
    
// }
// console.log(RArray);

//Second Method
 let arr=[10,20,3,40,5,7,96]
 let i=0, j=arr.length-1;
console.log(i,j);

 while (i<j) {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp
    i++;
    j--;
 }
console.log(arr);

