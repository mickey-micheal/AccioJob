// let arr = [1,2,2,3,4,4,5]
// const arr1 = new Set(arr)

// console.log(arr1)

//=========

// let num1 = [1,2,2,1]
// let num2 = [2,2]

// let set = new Set(num1)
// let ans = new Set()

// for(let item of num2){
//     if(set.has(item)){
//         ans.add(item)
//     }
// }
// console.log(Array.from(ans))

//=============

// let input = [1,2]
// let input1 = [2,3]

// let my = new Set([...input,...input1])

// console.log(Array.from(my))

//================

let a = [1,2,3]
let b = [2,4]

let set = new Set(a)

for(let item of b)
{
    if(set.has(item))
    {
        set.delete(item)
    }
}
console.log(a)

//==============

// let q = [1,2,3]
// let qq = [2,3,4]

// let aa = new Set(q)

// for(let item of qq)
// {
//     if(aa.has(item))
//     {
//         aa.delete(item)
//     }
//     else
//     {
//         aa.add(item)
//     }
// }

// console.log(aa)

//================

