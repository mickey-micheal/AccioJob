// const myset = new Set()

// myset.add(1)
// myset.add(2)
// myset.add(3)
// myset.add(4)
// myset.add(5)
// myset.add("Mickey")
// myset.add("Sapna")
// myset.add("Sapey")

// console.log(myset)


let arr =[1,2,3,4,5,6,7,8,9]

const mywet = new Set(arr)

// mywet.delete(3)
// mywet.clear()

console.log(mywet)

let something = mywet.entries()

for(let item of something){
    console.log(item)
}