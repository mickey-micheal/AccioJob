// Contructor functions

function Person(name ,age , city)
{
    this.Firstname = name
    this.lastname = age
    this.home = city
}


let p1 = new Person("Mickey",23,"Delhi")
let p2 = new Person("Anurag",25,"Lucknow")

console.log(p1,p2)


// clsss

class Car{
    constructor(brand,engine,color)
    {
        this.brandname = brand
        this.enginename = engine
        this.colornme = color
    }
}

let c1 = new Car("BMW","patrol","black")
let c2 = new Car("odi","disal","blue")

console.log(c1,c2)
