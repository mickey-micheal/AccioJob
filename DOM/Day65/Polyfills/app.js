if(!Array.prototype.hasOwnProperty("sum"))
{
    Array.prototype.sum = function(){
        let s = 0
        for (const item of this) 
        {
            s += item
        }
        return s
    }
}

let arr = [1,2,3,4,5,6]

let avg = arr.sum() / arr.length

const h1 = document.getElementById("h1")

h1.innerText = `Averagne Package : ${avg}`


Array.prototype.binarySearch = function(terget)
{
    let l = 0
    let r = this.length - 1

    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2)

        if(this[mid] == terget) return mid

        else if(terget > this[mid]) l = mid + 1

        else r = mid - 1
    }

    return -1
}