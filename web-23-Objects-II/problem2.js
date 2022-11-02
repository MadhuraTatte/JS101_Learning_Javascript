// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input

// ```
// [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]

let details = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
]

function object2(obj){


  let arr = obj.students
  
  let max_marks = -Infinity;
  let topper_name ;
  
  for(let i=0; i<arr.length; i++)
  {
      let person_info = arr[i];
      let total_marks = person_info.marks[0] + person_info.marks[1] + person_info.marks[2];
    
      if(max_marks < total_marks)
      {
        max_marks = total_marks ;
        topper_name = person_info.name;
      }
  }
  
  console.log(obj.grade+"-"+topper_name+"-"+max_marks );
  
}



for(let i=0; i<details.length; i++)
{
  object2(details[i]);
}