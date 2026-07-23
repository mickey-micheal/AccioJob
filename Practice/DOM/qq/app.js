const text = document.getElementById("text")
const div = document.getElementById("div")
const p = document.createElement("p")

p.innerText = 100
div.append(p)

text.addEventListener("input", () => {
    console.log(text)
    let r = 100 - text.value.length
    p.innerText = r
})

