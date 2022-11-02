let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // expected output: 1

function lastIndexOf(x){

let max=-Infinity;
for(i=0;i<=animals.length-1;i++){
  if(x==animals[i]){
    if(i>max){
      max=i;
    }
    
  }
}
console.log(max);
}

lastIndexOf("Dodo");



function lastindexOf(y){

for(j=0;j<=animals.length-1;j++){
  if(y==animals[j]){
    console.log(j);
  }
}
}

lastindexOf("Tiger");