// Create a new array from the given array such that each element of the new array is raised to a power of 5.
let arr = [2, 3, 4, 6, 7]
// Output = [32, 243, 1024, 7776, 16807]


let new_arr=arr.map(function(element,index){
  return element**5;
});

console.log(new_arr);