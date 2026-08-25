class Parent{
    constructor(name = "", age = "")
    {
        this.name = name
        this.age = age
    }
    Sayhi(){
        console.log("qwertyu")
    }
}

class Child extends Parent{
    constructor(n , a , m)
    {
        super(n, a)
        this.mobile = m
    }
}

class GrandChild extends Child{
    constructor(n, a, m , c)
    {
        super(n,a,m)
        this.cycle = c
    }
}

const p1 = new Parent("Mickey papa", 24)
console.log(p1)

const c1 = new Child("Anurag" , 20, "Apple")
console.log(c1)

const gc1 = new GrandChild("sumit", 10 , "Sumsang" , "biclye")
console.log(gc1)