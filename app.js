// import product from "./data.js";
// product.forEach((product) => {
//     console.log(product.price)
//     if (product.price <=100)
//    cheepProduct 
// });


// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
  
// function  getNamesByGrade(students, grade){
// if
// }
function gratNamesByGrade(students,grade){
  return students.map((students) =>{
    if (students.percent > 85){
      return { name: students.name, percent: students.percent, grade: 5};
    } else if (students.percent <= 85 && students.percent > 70){
      return { name: students.name, percent: students.percent, grade: 4}; 
    } else{
        return { name: students.name, percent: students.percent, grade: 3};
    }
  }).filter ((student) => {
    return student.grade == grade;
  }).map ((student) =>{
    return student.name;
  });
}
const result = gratNamesByGrade( students , 5);
console.log(result);

