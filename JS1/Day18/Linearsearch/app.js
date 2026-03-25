let arr = [1,2,3,4,5,6,7,8,9,2,3]

let terget = 3
let ans = -1

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == terget){
        ans = i
        break
    }
}
console.log(ans)

function linearsearch(arr , terget) {
    let ans = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == terget) {
            ans = i
            break
        }
    }
    return ans

}

console.log(linearsearch([1,2,3,4,5,6,7,8,2,3], 3))

//=====================================

function findobject(arr , id) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == id){
            return arr[i]
        }
    }
    return {}
}
const user = [
    {id : 1, name : "aman"},
    {id : 2, name : "riya"},
    {id : 3, name : "shubham"},
    {id : 4, name : "neha"}
]
console.log(findobject(user , 3))

//================================

function lovtion(arr, city) {
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].city == city){
            ans.push(arr[i].name)
        }
    }
    return ans
    
}

const user1 = [
    {id : 1, name : "aman", city : "mumbai"},
    {id : 2, name : "riya", city : "delhi"},
    {id : 3, name : "shubham", city : "pune"},
    {id : 4, name : "neha" , city : "delhi"}
]
console.log(lovtion(user1, "delhi"))


//========================================

function fx(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > 50000) {
            return arr[i]
    }
    return {}
}
    
}
const products = [
{ id: 1, name: "Mouse", price: 500 },
{ id: 2, name: "Keyboard", price: 1500 },
{ id: 3, name: "Monitor", price: 12000 },
{ id: 4, name: "iPhone", price: 80000 },
{ id: 5, name: "Laptop", price: 65000 },
{ id: 6, name: "Tablet", price: 20000 }
];

console.log(fx(products,50000))


//==================================


function fu(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].age > 25 && arr[i].city == "delhi")
            return arr[i]       
    }
    return {}
}

const users = [
{id:1, name:"Aman", age:22, city:"Delhi"},
{id:2, name:"Riya", age:28, city:"Mumbai"},
{id:3, name:"Karan", age:30, city:"Delhi"}
];

console.log(fu(users))

//=================================

function find(arr) {
    let cep = arr[0]
    let ex = arr[0]
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].price < cep){
            ans.push(arr[i].price)
        }
        else if(arr[i.price > ex]){
            ans.push(arr[i].price)
        }
        
    }
    
}

const products1 = [
{ id: 1, name: "iPhone", price: 80000 },
{ id: 2, name: "Laptop", price: 65000 },
{ id: 3, name: "Headphones", price: 3000 },
{ id: 4, name: "Monitor", price: 12000 },
{ id: 5, name: "Keyboard", price: 2000 },
{ id: 6, name: "Smart Watch", price: 15000 }
];

console.log(arr(products1))

