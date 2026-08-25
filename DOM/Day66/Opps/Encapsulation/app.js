class BankAccount{
    #balance
    #pin
    constructor(name,bal,pin)
    {
        this.name = name
        this.#balance = bal
        this.#pin = pin
    }

    //getter
    getBalnace()
    {
        console.log(this.#balance)
    }

    //setter
    addBlance(pin , amount)
    {
        if(this.#pin != pin)
        {
            console.log("invail pin")
            return
        }
        console.log("amoun added Secsefullly" this.)
    }

    Withdrawal(pin, amount)
    {

    }
}


let acc = new BankAccount("Mikcey", 274631, 8780)
acc.getBalnace()
