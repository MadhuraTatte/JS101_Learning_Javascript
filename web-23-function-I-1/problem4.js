// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
let arr=[1,3,6,7];

function add(arr){
let sum=0;

for(i=0;i<=arr.length-1;i++){
  sum+=arr[i];
}
return sum;
}
let ans=add(arr);
let count=0;
for(i=0;i<=arr.length-1;i++){
  count++;
  
}

console.log(ans/count);