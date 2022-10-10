// Given stored username and password and input username and password, Print if the user can login or not.

let database_user="xyz@yahoo.com", database_pass="789xyzabc"

let user="xyz@yahoo.com", pass="789xyzabc"

if(database_user==user){
  if(database_pass==pass){
    console.log("Login Successful");
  }else{
    console.log("Invalid Password");
  }
}else{
  console.log("Wrong Credentials");
}