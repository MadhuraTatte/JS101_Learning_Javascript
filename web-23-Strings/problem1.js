
//Given a string count the number of words in that string


let str="There are 20 persons in the row";
let count=0
for(i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++;
  }
}
console.log(count+1);