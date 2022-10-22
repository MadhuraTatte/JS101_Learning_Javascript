//Use the above function to print the Primes from 2 to a given limit

function prime(num) {
  let count = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }else {
    return false;
  }
}

for(j=2;j<=15;j++){
  let ans=prime(j);
  if(ans==true){
    console.log(j);
  }
}