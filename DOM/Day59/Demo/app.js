const lightbtn = document.getElementById("light")
const darkbtn = document.getElementById("dark")
const main = document.getElementById("main1")
const input = document.getElementById("ip")
const h2 = document.getElementById("h2")


lightbtn.addEventListener("click", () => {
    main.style.backgroundColor= "white"
    main.style.color="black"
})


darkbtn.addEventListener("click", () => {
    main.style.backgroundColor= "black"
    main.style.color="white"
})


// window.addEventListener("load" ,() => {
//     input.focus()
// })

input.addEventListener("focus" , () => {
    input.style.width = "30%"
})

input.addEventListener("blur" , () => {
    input.style.width = "10%"
})

input.addEventListener("input" , (e) => {
    h2.innerText = e.target.value
})


