let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

function slice(start){
  let arr=[];
  for(i=start;i<=animals.length-1;i++){
    arr.push(animals[i]);
  }
  console.log(arr);
}
slice(2);


// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

function Slice(start,end){
  let arr=[];
  for(j=start;j<end;j++){
    arr.push(animals[j]);
  }
  console.log(arr);
}
Slice(2,4);


// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

function sLice(start,end){
  let arr=[];
  for(k=start;k<=end;k++){
    arr.push(animals[k]);
    
  }
  arr.pop();
  console.log(arr);
}
sLice(1,5);

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

function slIce(start){
  let arr=[];
  for(m=-start+1;m<=animals.length-1;m++){
    arr.push(animals[m]);
  }
  console.log(arr);
}
slIce(-2);

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

function sliCe(start,end){
  let arr=[];
  for(n=start;n<=animals.length-1+end;n++){
    arr.push(animals[n]);
  }
  console.log(arr);
}
sliCe(2,-1);

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

function slicE(){
  let arr=[];
  arr.push(...animals)
  console.log(arr);
}
slicE();


