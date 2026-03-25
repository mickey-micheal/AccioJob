// // // // // 9 Table
// // // // // let e = 9 
// // // // // let start = 1

// // // // // while(start < 11){
// // // // //     console.log(e + " X " + start + " = " + e * start)
// // // // //     start++
// // // // // }

// // // // // Sum of odd no from 1 to n
// // // // // let n = 10
// // // // // let start = 1
// // // // // let sum = 0 

// // // // // while(start <= n){
// // // // //     if(start % 2 != 0){
// // // // //         sum = sum + start
// // // // //     }
// // // // //     start++
// // // // // }
// // // // // console.log(sum)

// // // // // factorial of a number
// // // // // var c = 5
// // // // // var start = 1
// // // // // var p = 1 

// // // // // while(start <= c){
// // // // //     p *= start
// // // // //     start++
// // // // // }
// // // // // console.log (p)

// // // // // 


// // // // var n = 252
// // // // let p = 1
// // // // var a = 0

// // // // while(p <= n){
// // // //     a += n % 10
// // // //     n = Math.floor(n / 10)
// // // //     p++
// // // // }
// // // // console.log(a)


// // var n = 8
// // var ans = 2
// // var start = 2

// // while (start < n) {
// //     var prime = false
// //     for (let p = 0; p = start; p++) {
// //         if (p % start == 0) {
// //             prime = true
// //         }
// //     }
// //     start++
// //     for (let d = 0; d = start; d++) {
// //         if (d % start != 0) {
// //             prime = true
// //         }
// //     }
// //     if (prime == true) {
// //         console.log(start);34
// //     }
// // }

// //1-------------------------
// let name = 'mickey'
// let age = 24

// console.log(name ,age);


// //2-----------------------------
// let a = 5
// let b = 10
// let temp = a + b

// a = temp - a
// b = temp - b

// console.log(a);
// console.log(b);


// //3-------------------------------
// let w = 10
// let l = 20

// console.log(l * w);


// //4--------------------------------
// let n = 76

// if (n % 2 == 0) {
//     console.log("Even");    
// }
// else{
//     console.log("Odd");   
// }


// //5--------------------------------
// let ag = 18

// if(ag >= 18){
//     console.log("You can Vote");
// }
// else{
//     console.log("You cannot Vote");
// }


// //6----------------------------
// let num1 = 50
// let num2 = 20
// let num3 = 100

// if(num1 > num2 && num1 > num3) {
//     console.log("num1 is the Largest Number");
// }
// else if(num2 > num1 && num2 > num3) {
//     console.log("num2 is the Largest Number");
// }
// else{
//     console.log("num3 is the Largest Number");
// }



// //7------------------------------------
// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }






// //8----------------------------
// let as = 5
// for (let mic = 1; mic <= 10; mic++) {
//     let ans = as * mic

//     console.log(ans);
// }
  

// //9---------------------------
// var nn = 0
// for (let bb = 1; bb <= 50; bb++) {
//     nn += bb
// }
// console.log(nn);


// //10------------------
// for (let qq = 10; qq >= 1; qq--) {
//     console.log(qq);
// }


// //11----------------
// let pp = 1
// for (let n = 5; n > 0; n--) {
//     pp *= n

// }
// console.log(pp);


// 


//1--------------------
let n = 5
let prime = true
for (let index = 2; index < n; index++) {
    if (index % (n / 2) == 0) {
        prime = false
        break
    }
}
if (prime == true) {
    console.log(`${n} is the prime number`);
}
else{
    console.log(`${n} is not the prime number`);
}


//2--------------------
let m = 0
let r = 1

console.log(m);
console.log(r);

for (let q = 1; q <= 10; q++) {
    let hh = m + r   
    console.log(hh);
    m = r
    r = hh
}




//3-----------------------------
let s = 10
for (let z = 1; z <= s; z++) {
    let p = ""
    for (let J = 0; J <= z; J++) {
        p = p + "*"
    }
    console.log(p);
}


//4-----------------------
let h = 534
let sum = 0
for (let Ji = 1; Ji < h; Ji++) {
    let az = h % 10
    h = Math.floor(h / 10)
    sum += az
} 
console.log(sum);


//5-------------------------------
let l = 50
for (let t = 2; t < l; t++) {
    let prim = true
    for (let h = 2; h < t; h++) {
        if (t % h == 0) {
            prim = false
            break;
        }
    }
    if (prim == true){
        console.log(t)
    }
}



//================================


