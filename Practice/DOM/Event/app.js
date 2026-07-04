const screen = document.getElementById("screen")
const btn = document.getElementById("btn")

// console.dir(screen)

btn.addEventListener("click",() => {

    if(screen.style.backgroundColor === "white" || screen.style.backgroundColor === "")
    {
        btn.innerText = "🌅"
        screen.style.backgroundColor = "black"
    }
    
    else if(screen.style.backgroundColor === "black")
    {
        btn.innerText = "🌃"
        screen.style.backgroundColor = "White"
    }

})
