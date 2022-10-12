let lower="qwertyuiopasdfghjklzxcvbnm";
let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
let char="h";
for(i=0;i<=lower.length-1;i++){
  if(lower[i]==char){
    char=upper[i];
  }

}
 console.log(char);

