// let prime = 13

// for (let i = 2; i <= prime; i++)
// {
//  let ans = true
//  for (let j = 2; j < i; j++) 
//  {
//    if(i % j == 0)
//    {
//      ans = false
//      break
//    }       
//  }
//  if(ans == true)
//  {
//         console.log(i)
//  }
// }

//[===============================================]

// let arr = [1,2,3,4,5]

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)

//===========================================

// let str = "javascript"
// let count = 0


// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//     count++
//   }
// }
// console.log(count)

//===================================


// function multiply(a , b) {
//   let ans = a * b 
//   return ans
// }

// console.log(multiply(10, 20))


//===============================

// console.log(a)
// const a = 10


// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }


// let arr = [10, 20, 30];
// console.log(arr[1]);



// console.log(5 == "5");
// console.log(5 === "5");


//=====================
let n = 234567

let count = 0

while(n > 0) {
    let a = n % 10
    n = Math.floor(n / 10)
    if (a % 2 == 0) {
        count++
    }
}
console.log(count)