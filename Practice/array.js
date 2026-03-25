let month = 13

if (month == 1) {
    console.log(31)
}
else if(month == 2){
    console.log(28)
}
else if(month == 3){
    console.log(31)
}
else if(month == 4){
    console.log(30)
}
else if(month == 5){
    console.log(31)
}
else if(month == 6){
    console.log(30)
}
else if(month == 7){
    console.log(31)
}
else if(month == 8){
    console.log(31)
}
else if(month == 9){
    console.log(30)
}
else if(month == 10){
    console.log(31)
}
else if(month == 11){
    console.log(30)
}
else if(month == 12){
    console.log(31)
}
else{
    console.log("Invaild Input")
}

// let arr = [1,2,3,4,5,6,7,8,9]

// function evenIndices(arr) {
//   for(let i = 0; i < arr.length; i+=2){
//       return arr[i]
//   }

// }


// let arr = [1,2,3,4,5,6,7,8]

// let a = arr.filter(item=>item%2==0).map(item=>item*3).reduce(acc,cur=>return {acc*cur})

// console.log(a)


let aa = "jhsfg dfgg"
// let bb = ""

// for (let index = aa.length -1; index >= 0; index--) {
//     bb += aa[index]

// }
// console.log(bb)
// if(aa === bb){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

let bb = 0

for (let index = 0; index < aa.length; index++) {
    if(aa[index] == "g"){
        bb++
    }
}
console.log(bb)


let arr = [2,2,2,2,2,2,2,2,3,2]
let sum = 0
let av = 0
let max = -Infinity

for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    av = Math.floor(sum / arr.length)
    if (max < arr[index]) {
        max = arr[index]
    }
}
console.log(sum ,av , max)


let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let odd = []
let even = []

for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] % 2 != 0) {
        odd.push(arr1[index])
    }
    else if(arr1[index] % 2 == 0){
        even.push(arr1[index])
    }
}
odd.sort((a,b) => b - a)
even.sort((a,b) => a - b)
odd.push(even)
odd.flat()
odd.join(" ")
console.log(odd)

let arr2 = [6,2]
let arr3 = [5,7,2,8]

let a = 0
let b = 0

for (let i = 0; i < arr2.length; i++) {
    a += arr2[i]
    b += arr3[i]
}

if (a == b) {
    console.log("jbhfhf")
}
else if(a > b){
    console.log(a)

}
else{
    console.log(b)
}

let arr4 = [1,2,3,1,2,3,1,2,3,2]
let aaaa = 2
let aaa = []

for (let index = 0; index < arr4.length; index++) {
    if (aaaa == arr4[index]) {
        aaa.push(index + 1)
    }
}
if (aaa.length == 0) {
    console.log(-1)
}
else{
    console.log(aaa.join(" "))
}


let arr5 = [1,2,3,-32,-4,-2]

let pos = 0
let nav = 0
let zero = 0

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < 0) {
        nav++
    }
    else if(arr5[i] > 0){
        pos++
    }
    else{
        zero++
    }
}
pos = pos / arr5.length
nav = nav / arr5.length
zero = zero / arr5.length

console.log(pos.toFixed(6))
console.log(nav.toFixed(6))
console.log(zero.toFixed(6))


let arr6 = ["mickey","manishk","siya","preetikumari"]
let max1 = arr6[0]

for (let i = 0; i < arr6.length; i++) {
    if (max1.length < arr6[i].length) {
        max1 = arr6[i]
    }
}
console.log(max1)


let arr7 = [2,5,2,67,2,6,2]
let ans1 = []

for (let i = 0; i < arr7.length; i+=2) {
    ans1.push(arr7[i])
}
console.log(ans1)

let arr8 =[2,4,5,7,3,6,7,9,3,1,6]
let t = 3
let ans11 = 0

for (let i = arr8.length - 1; i >= 0; i--) {
    if(t == arr8[i]){
        ans11 = i
        break
    }
}
console.log(ans11)


let arr9 = [1,2,3,4,5]
let ans23 = 0

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] % 2 != 0) {
        ans23 += arr9[i]
    }
}
console.log(ans23)


let arr10 = [2,2,3,4]
let ans = 0

for (let i = 0; i < arr10.length; i++) {
    if(arr10[i] + arr10[i + 1] > arr10[i + 2]){
        ans++
    }
}
console.log(ans)


//============================
let arr11 = [1,2,0,0,-1]
let k = 3
let count = 0

for(let i = 0; i < arr11.length; i++){
  if(arr11[i] <= 0){
    count++
  }
}
if(k <= count){
  console.log("NO")
}
else{
  console.log("YES")
}