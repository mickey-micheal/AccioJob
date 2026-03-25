let obj = {
    name : "Mickey",
    age : 23,
    ispresent : true,
    sayHi : function () {
        console.log("hi" + obj.name)
    },
    sayhello : function () {
        console.log("Hello " + this.name)
    },
    colors : ["Red","blue","Black"]
}






// for (const key in obj) {
//     console.log(key ,obj[key])
    
// }

delete obj.ispresent
console.log(obj)

// console.log(obj)

// console.log(obj.name,obj.age,obj.ispresent)

// console.log(obj["age"])


// obj.age = 25