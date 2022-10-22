// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
function convert(a) {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

  for (i = 0; i <= upper.length - 1; i++) {
    if (a == upper[i]) {
      
      return lower[i];
    }else if(a==lower[i]){
      return upper[i];
    }
  }
  
}



function swap(word){
  let bag = "";
  for (j = 0; j <= word.length - 1; j++) {
    
    
      a=convert(word[j]);
    
    
       bag+=a;
    }
    return bag;
       
}
let word="Test";
console.log(swap(word));

