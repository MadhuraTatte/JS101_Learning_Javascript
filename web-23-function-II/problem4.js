let str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

function substring(start,end){
  let bag="";
  for(i=start;i<end;i++){
    bag+=str[i];
  }
  console.log(bag);
}
substring(1,3);

// console.log(str.substring(2));
// // expected output: "zilla"

function Substring(start){
  let bag="";
  for(i=start;i<=str.length-1;i++){
    bag+=str[i];
  }
  console.log(bag);
}
Substring(2);
