// //-----------------------------------------------Loop------------------------------------------------

// //1------------------
// let a = 10

// for (let aa = 1; aa <= a; aa++) {
//     console.log(aa);   
// }


// //2-----------
// let b = 1

// for (let bb = 10; bb >= b; bb--) {
//     console.log(bb);   
// }


// //3-----------------
// let c = 10

// for (let cc = 1; cc <= c; cc++) {
//      if (cc % 2 == 0) {
//         console.log(cc);
//     }
// }




// //4---------------
// let d = 10
// let count = 0
// let count2 = 0

// for (let dd = 1; dd <= d; dd++) {
//      if (dd % 2 == 0) {
//         count++
//     }
//     else if (dd % 2 != 0){
//        count2++
//     }    
// }
// console.log(count,count2);


// //5-------------
// let e  = 10
// let sum = 0

// for (let ee = 1; ee <= e; ee++){
//      sum += ee
// }
// console.log(sum);

    
// //6-------------------
// let f = 3
// let sum1 = 1
// for (let ff = 1; ff < f; ff++) {
//     sum1 *= ff
// }
// console.log(sum1);



// //-----------------------------------------------Array---------------------------------------



// //1------------------
// let arr = [1,2,3,4,5,6,7,8,9,0]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }



// //2----------------------
// let arr1 = [1,2,3,4,5,6,7,8,]
// let sum3 = 0

// for (let index1 = 0; index1 <= arr1.length; index1++) {
//     sum3 += index1
// }
// console.log(sum3);



// //3-------------------------------
// let arr2 =[1,2,3,4,5,6,7,8,9,10]
// let suneven = 0
// let sunodd = 0

// for (let index2 = 0; index2 <= arr2.length; index2++) {
//     if(index2 % 2 == 0){
//         suneven += index2
//     }
//     else if(index2 % 2 != 0){
//         sunodd += index2
//     }
// }
// console.log(suneven,sunodd);



// //4------------------------------ 
// let arr6 = [1,2,3,45,5,6,0,8]
// let min = arr6[0]
// let max = arr6[0]

// for (let index6 = 0; index6 < arr6.length; index6++) {
//     if (arr6[index6] > max) {
//         max = arr6[index6]
//     }
//     else if (arr6[index6] < min ){
//         min = arr6[index6]
//     }    
// }
// console.log(min , max);


// //5-------------------------
// let ww = [1,2,3,4,5,6,77,8,9]

// for (let kk = ww.length-1; kk >= 0; kk--) {
//     console.log(ww[kk]);
// }



//6-----------------------

let arr7 = [5,48,9,3,1,2]
let t = 6
let ans = 0

for (let index = 0; index < arr7.length; index++) {
    if(arr7[index] == t){
        ans = index
        break
    }
    else(
        ans = -1
    )
}
    console.log(ans)
