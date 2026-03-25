// let myMap = new Map()

// myMap.set("name" ,"Mickey")
// myMap.set("name1", "Sapna")

// myMap.delete("name")
// myMap.clear()

// for(let [key, value] of myMap)
// {
//     console.log(key, value)
// }

// const i = myMap.entries()
// for(let item of i)
// {
//     console.log(item[0],item[1])
// }

// myMap.forEach((value, key) => 
// )

//==================

let str = "my name is javascript"

let map = new Map()

for(let item of str)
{
    // map.set(item, map)
    if(map.has(item))
    {
        map.set(item, map.get(item) + 1)
    }
    else
    {
        map.set(item, 1)
    }
}

console.log(map)
