// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sorted = true
// for (let i = 0; i < arr.length - 1; i++) 
// {
//   for (let j = 0; j < arr.length - 1 - i; j++) 
//   {
//     console.log("loop");
//     if (arr[j] > arr[j + 1])
//     {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;

//       sorted = false
//     }
//   }

//   if(sorted == true)
//   {
//     break
//   }
// }

// console.log(arr);



let arr = [
  {
    name : "shubham",
    age : 45
  },
  {
    name : "Amar",
    age : 5
  },
  {
    name : "Divya",
    age : 4
  },
  {
    name : "Ravi",
    age : 20
  },
  {
    name : "Sidhi",
    age : 1
  }
]

let sorted = true
for (let i = 0; i < arr.length - 1; i++) 
{
  for (let j = 0; j < arr.length - 1 - i; j++) 
  {
    console.log("loop");
    if (arr[j].age > arr[j + 1].age)
    {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      sorted = false
    }
  }

  if(sorted == true)
  {
    break
  }
}

console.log(arr);

