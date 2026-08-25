const sidebar = document.getElementById("side")
const span = document.getElementsByClassName("span")

sidebar.addEventListener("mouseenter", () => {
    sidebar.style.width = "15vw"

    for(let item of span)
    {
        item.style.display = "block"
    }
})

sidebar.addEventListener("mouseleave", () => {
    sidebar.style.width = "5vw"

     for(let item of span)
    {
        item.style.display = "none"
    }
})

