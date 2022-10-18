//Given an array find the unique items in the array

let arr=["enna","meena","deeca","meeka","meena","neena","deeca"];

let obj={};

for(i=0;i<=arr.length-1;i++){
  let key=arr[i];
    obj[arr[i]]=1;
  
}
console.log(obj);
