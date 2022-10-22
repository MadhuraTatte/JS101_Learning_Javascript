// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value

function absDiff(x,y){
let diff=x-y;
if(diff<0){
  diff=(-1)*diff;
}else{
  diff=diff;
}
console.log(diff);
}
absDiff(12,4);
absDiff(4,18);
