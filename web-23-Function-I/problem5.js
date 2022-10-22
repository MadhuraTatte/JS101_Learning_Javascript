 //Write a function to replace spaces in a given string with - .

function replace(str){
let bag="";
for(i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    bag+="-";
  }else{
    bag+=str[i];
  }
  
}
  console.log(bag);
}

replace();