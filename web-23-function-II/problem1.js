//Write a custom function that has the same behavior of inbuilt Array Join 

function ArrayJoin(arr){
  let bag="";

for(i=0;i<=arr.length-1;i++){
  bag+=arr[i]+",";
  
}
let bag1="";
  for(j=0;j<bag.length-1;j++){
        bag1+=bag[j];
  }
  console.log(bag1);
}





function Join(arr){
  let jhola="";
  for(k=0;k<=arr.length-1;k++){
    jhola+=arr[k]+"";
  }
  console.log(jhola);
}



function joinArray(arr){
  let pishvi="";
  for(n=0;n<=arr.length-1;n++){
    pishvi+=arr[n]+"-";
    
  }
  let pishvi1="";
  for(l=0;l<pishvi.length-1;l++){
    pishvi1+=pishvi[l];
  }
  console.log(pishvi1);
}



let arr=["Fire","Air","Water"];
ArrayJoin(arr);
Join(arr);
joinArray(arr);