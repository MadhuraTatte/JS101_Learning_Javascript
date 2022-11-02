let array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

function includes(element){
  let flag=false;
  for(i=0;i<=array1.length-1;i++){
    if(element==array1[i]){
      flag=true
    
    }
  }
  if(flag=true){
    console.log("true");
  }else{
    console.log("false");
  }
}
includes(2);

let pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false

function Includes(element){
  let flag=false;
  for(i=0;i<=pets.length-1;i++){
    if(element==pets[i]){
      flag=true;
    }
  }
  if(flag==true){
    console.log("true");
  }else{
    console.log("false");
  }
}
Includes("cat");
Includes("at");


