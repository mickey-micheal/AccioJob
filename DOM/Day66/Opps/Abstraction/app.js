class Car{
    constructor(n)
    {
        this.name = n
    }


    startCar()
    {
        this.#injectFuel()
        this.#igniteEngine()
    }

    #injectFule()
    {
        console.log("Fule Injected")
    }


    #igniteEngine()
    {
        console.log("Engiend ignite")
    }
}

let cc = new Car("Mickey")
cc.startCar()

