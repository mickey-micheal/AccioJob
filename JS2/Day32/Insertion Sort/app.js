// let arr = [15,11,-10,0,1,6]

// for (let i = 0; i < arr.length; i++) 
// {
//     for (let j = 0; j < arr.length; j++) 
//     {
//         if (arr[j] < arr[j - 1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j - 1]
//             arr[j - 1] = temp
//         }
//     }
// }
// console.log(arr)



let arr = [13,6,17,12]

let arr2 = [13,6,17,12]

let arr1 = arr.sort()

let ans = []

for (let i = 0; i < arr2.length ; i++) 
{
    for (let j = 0; j < arr1.length ; j++)
    {
        if (arr2[i] == arr1[j])
        {
            ans.push(arr1[j + 1])
            break
        }
        
    }
}
console.log(ans)