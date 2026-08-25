const input = document.getElementById("ip")
const btn = document.getElementById("btn")
const adding = document.getElementById("parent2")

let arr = []

btn.addEventListener("click", () => {

    if(!input.value)
    {
        alert("Please Fille")
        return
    }

    const li = document.createElement("li")
    li.innerText = input.value
    adding.append(li)
    arr.push(li.innerText)
    input.value = ""
    localStorage.setItem("li", arr)
})

window.addEventListener("load", () => {
    let aa = localStorage.getItem("li")

    for(let item in aa)
    {
        const li = document.createElement("li")
        li.innerText = aa[item]
        adding.append(li)
    }
})


