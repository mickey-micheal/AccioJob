const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")

outer.addEventListener("click" , () => {
    console.log("outer click")
})


middle.addEventListener("click" , () => {
    console.log("middle click")
})


inner.addEventListener("click" , () => {
    console.log("inner click")
})
