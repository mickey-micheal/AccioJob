// "use strict"

// console.log(this)

// function abc()
// {
//     console.log(this)
// }
// abc()

// let a = () => {
//     console.log(this)
// }
// a()

function interduce()
    {
        console.log(`hello ${this.name} or batao ${this.age}`)
    }

let p1 = {
    name : "Mickey",
    age : 24,
    // interduce : function ()
    // {
    //     console.log(`hello ${this.name} or batao ${this.age}`)
    // }
}


let p2 = {
    name : "Anurag",
    age : 26,
}

// p1.interduce()
// p1.interduce.call(p2)

interduce.call(p1)
interduce.call(p2)








