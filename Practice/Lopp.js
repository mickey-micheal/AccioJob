//---------Loop-----------
//1-------------------
let a = 10

for (let index = 1; index <= a; index++) {
    console.log(index)
}


//2---------------
let b = 10

for (let index = b; index >= 1; index--) {
    console.log(index)
}


//3--------------------
let c = 11

for (let index = 1; index <= c; index++) {
     if (index % 2 == 0) {
        console.log(index)
     }
}


//4---------------
let d = 6544
let count1 = 0
let count2 = 0

for (let index = 1; index <= d; index++) {
    if (index % 2 == 0){
        count1++
    }
    else if(index % 2 != 0){
        count2++
    }
}
console.log(count1,count2)


//5---------------------
let e = 10
let sum = 0

for (let index = 1; index <= e; index++) {
    sum += index
}
console.log(sum)


//6---------------------
let f = 5
let sum1 = 1

for (let index = 1; index <= f; index++) {
    sum1 *= index
}
console.log(sum1)


//7------------------------
let g = 14

for (let index = 1; index <= 10; index++) {
    let sum = g * index
    console.log(`${g} X ${index} = ${sum}`)
}
 

//8----------------------
let h = 121
let on = h
let rn = 0

while (h > 0) {
    let a = h % 10
    rn = (rn * 10) + a
    h = Math.floor(h / 10)
}

if (on == rn ) {
    console.log(`${on} is the palindrome number`)
}
else{
    console.log(`${on} is not the palindrome number`)
}

//9----------------------

let i = 1678743
let lr = 0

while (i > 0) {
    let a = i % 10 
    if (a > lr ) {
        lr = a
    }
    i = Math.floor(i / 10)
}
console.log(lr)


//-----------------------Arrey---------------
//1-----------------
let arr = [1,2,3,4,5,6,"jhefsdjh",8,9,0]

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

//2------------------------
let arr1 = [1,2,3,4,5,6,7,8,9,10,11]
let sum2 = 0

for (let index = 0; index < arr1.length; index++) {
    sum2 += index
}
console.log(sum2)

//3---------------------
let arr2 = [1,2,3,4,5,6,7,8,9,10,11]
let count = 0
let count3 = 0

for (let index = 0; index < arr2.length; index++) {
    if (arr2[index] % 2 == 0) {
        count++
    }
    else {
        count3++
    }
}
console.log(count , count3)


//4----------------------
let arr3 = [87,54,8,23,9,45,67,32,1,65,38]
let max = arr3[0]

for (let index = 0; index < arr3.length; index++) {
    if (arr3[index] > max) {
        max = arr3[index]
    }
}
console.log(max)


//5--------------------------
let arr4 = [7,53,32,68,53,2,80,48,42,1,67]
let min = arr4[0]

for (let index = 0; index < arr4.length; index++) {
    if (arr4[index] < min) {
        min = arr4[index]
    }
}
console.log(min)


//6-----------------------
let arr5 = [7,53,32,68,53,2,80,48,42,1,67]

for (let index = arr5.length - 1; index >= 0; index--) {
    console.log(arr4[index])
}


//7---------------------
// let arr6 = [7,53,32,68,53,2,80,48,53,42,1,67]
// let dup = arr6[0]

// for (let index = 0; index < arr6.length; index++) {
//     if (arr6[index == dup]) {


//     }
// }

// let arr6 = [7,53,32,68,53,2,80,48,32,42,1,67]

// let q = [...new Set(arr6)]

// console.log(q)


///------------------------------------------------------

let p = 67576
let isprime = true

for (let index = 2; index < p; index++) {
    if ((p / 2) % index == 0 ) {
        isprime = false
        break
    }
}
if (isprime == true) {
    console.log(`${p} is a prime number`)
}
else{
    console.log(`${p} is not a prime number`)
}


for (let index = 1; index <= 10; index++) {
    let str = ""
    for (let j= 1; j <= index; j++) {
        str += j
    }
    console.log(str)
}


// for (let index = 1; index <= 4; index++) {
//     let str = ""
//     for (let j = 1; j <= 4; j++) {
//         str += "*"
//         if (j == 2) {
            
            
//         }
//     }
//     console.log(str)
// }

let arr9 = [2,3,4,5,6]
let ans = []

  for(let i = 1;i < arr9.length; i++){
     ans[i] = arr9[i-1] * arr9[i+1]
     
  }
  console.log(ans)
  