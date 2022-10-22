// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num){
if(num%2==1){
  return true;
}else{
  return false;
}
}

for(i=1;i<=20;i++){
  let ans=isOdd(i);
  if(ans==true){
    console.log(i);
  }
}