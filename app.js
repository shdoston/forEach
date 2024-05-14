// N(1)
// let numbers = [3,4,5,6,];
// let number = numbers.reverse();
// console.log(numbers);


// N(2)

// let number1 = 10;
// let number2 = 10;

// if (number1 === 10 && number2 === 10) {
//     console.log("number1 va number2 teng 10 ga");
// } else {
//     console.log("number1 va number2 teng emas 10 ga");
// }

// N(3)

// function createArray(n, arr = []) {
//     if (n <= 0) {
//       return arr;
//     } else {
//       arr.unshift(n);
//       return createArray(n - 1, arr);
//     }
//   }

//   // Misol uchun, n=5
//   const n = 5;
//   const resultArray = createArray(n);
//   console.log(resultArray); // [1, 2, 3, 4, 5]

// N(4)

// const numbrs = [10, 6, 25, 30, 41, 15]; 

// const result = numbrs.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc[1] += curr; 
//   } else {
//     acc[0] += curr; 
//   }
//   return acc;
// }, [0, 0]);

// console.log(result);



// N(9)

// function ochiring(string) {
//     if (string.endsWith('0')) {
//       return string.slice(0, -1);
//     }
//     return string;
//   }

//   
//   console.log(ochiring("12340")); 
//   console.log(ochiring("56789")); 


N(10)

function engKichikSon(array) {
    let min = Math.min(...array);
    return min ** 4 + "";
  }
  
  
  let numbers = [3, 7, 2, 9, 5];
  console.log(engKichikSon(numbers));



