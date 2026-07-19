const openbtn = document.getElementById("openModal")
const modal = document.querySelector(".modal")
const cbtn = document.querySelector(".close-modal")

openbtn.addEventListener("click", () => {
    modal.style.display = "block"
})

cbtn.addEventListener("click", () => {
    modal.style.display = "none"
})


window.addEventListener("click", (e) => {
    if(e.target === modal)
    {
        modal.style.display = "none"
    }
})  
