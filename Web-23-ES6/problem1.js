// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)
// Do this using Arrow Function

isOdd=(num)=>{
if (num%2!==0){
  return true;
}else{
  return false;
}
}


for(i=0;i<=15;i++){
  (isOdd(i))?console.log(i):"";
}
