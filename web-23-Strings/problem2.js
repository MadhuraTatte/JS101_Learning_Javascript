//Given an array of string count the overall total number of characters


let arr=["Enna","Meena","Deeka","Sheena","Tina","Neena"];
let sum=0;
for(i=0;i<=arr.length-1;i++){
  sum+=arr[i].length;
}
console.log(sum);