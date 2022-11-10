// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function.

let convertToLower=(a)=> {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

  for (i = 0; i <= upper.length - 1; i++) {
    if (a == upper[i]) {
      
      return lower[i];
    }
  }
  
}


let word_lower=(word)=>{
  let bag = "";
  for (j = 0; j <= word.length - 1; j++) {
    let a=convertToLower(word[j]);
    
        bag+=a;
      }
       return bag;
}


let toArray=(arr)=>{
  let box=[];
  for(k=0;k<=arr.length-1;k++){
    let p=word_lower(arr[k]);
      
    box.push(p);
    
  }
  return box;
}

let arr=["MA","SA","I","SCH","OOL"];
console.log(toArray(arr));