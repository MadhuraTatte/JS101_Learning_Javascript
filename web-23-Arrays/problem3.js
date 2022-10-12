let arr=[23,52,70,62,12,15,40,77];

let sum=0;count=0;
for(i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum += arr[i];
    count++;
  }
}
console.log(sum/count);