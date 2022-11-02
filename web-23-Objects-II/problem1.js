// ## **Problem-1 User Age Filter**

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30

// - Sample Data Stored `[]` - List `{}` - Key-Value Pairs

// ```
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// ```

// - Sample Output

// `Nrupul Yogesh`

let names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ages=[32, 30, 26, 28, 44];

let arr=[];


for(i=0;i<=names.length-1;i++){
  let obj={};
  obj.name=names[i];
  obj.age=ages[i];
  arr.push(obj);
  
}

for(let j=0;j<=arr.length-1;j++){
  if(arr[j].age>30){
    console.log(arr[j].name);
  }
}