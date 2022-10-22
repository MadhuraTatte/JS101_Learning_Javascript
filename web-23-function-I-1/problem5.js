// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
let lower="qwertyuiopasdfghjklzxcvbnm";
upper="QWERTYUIOPASDFGHJKLZXCVBNM";
function Convert(char){

let ans;
for(i=0;i<=upper.length-1;i++){
  if(char==upper[i]){
    ans=lower[i];
  }
}
return ans;
}


function wordConvert(word){
let bag="";
for(j=0;j<=word.length-1;j++){
  let ans1=Convert(word[j]);
  bag+=ans1;
}
   return bag;
}


let arr=["MA", "SA", "I", "SCH", "OOL"];
let arr1=[];
for(k=0;k<=arr.length-1;k++){
  let ans2=wordConvert(arr[k]);
  arr1.push(ans2);
}
console.log(arr1);

