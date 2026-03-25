let obj = {
    name : "mickey",
    age : 23,
    pp : true,
    sayhi : () => {
        console.log("hello world")
    },
    address : {
        city : 'delhi',
        country : 'india'
    }
}

console.log(obj.age)
obj.sayhi()
console.log(obj.address.city, obj.address.country)

