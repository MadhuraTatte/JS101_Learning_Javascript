// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// Do this Problem using Arrow Function


let arr1 = [3, 5, 6, 7, 9, 8, 12];

Sum=(arr)=>{

  let sum=0;
  for(i=0;i<=arr.length-1;i++){
    
       sum+=arr[i];
    
    }
  
  return sum;
}


let count=0;
for(j=0;j<=arr1.length-1;j++){
  count++;
  
}
let ans=Sum(arr1);
if(count==0){
  console.log(0);
}else{
  console.log(ans/count);
}