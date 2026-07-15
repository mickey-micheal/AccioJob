const box = document.getElementById("box")
const ol = document.getElementById("ol")

let p1 = document.createElement("p")
p1.innerText = "Hello world from p1"


let p2 = document.createElement("p")
p2.innerText = "Hello world from p2"


let p3 = document.createElement("p")
p3.innerText = "Hello world from p3"


// box.append(p1 ,p2 ,p3)


// box.appendChild(p2)

//----------------------

box.setAttribute("class", "dabba")
box.setAttribute("style", "color: red;")

console.log(box.getAttribute("style"))
console.log(box.getAttribute("class"))

// box.remove()


//-----------------------

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Papaya",
    "Watermelon",
    "Guava",
    "Strawberry",
    "Kiwi",
    "Pomegranate",
    "Cherry",
    "Peach",
    "Pear",
    "Litchi",
    "Coconut",
    "Lemon",
    "Muskmelon",
    "DragonFruit",
]

let count = 1

for(let item of fruits)
{
    const li = document.createElement("li")
    li.innerText = item
    li.setAttribute("class", "my")
    li.setAttribute("id", count)
    count++
    ol.append(li)
}



