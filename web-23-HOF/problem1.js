// Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let new_arr=arr.filter(function(element,index){
  if(index%2!==0){
    return element;
  }
});

let sum=0;
let count=0;
for(i=0;i<=new_arr.length-1;i++){
  sum+=new_arr[i];
  count++;
}
console.log(sum/count);
