const screen = document.getElementById("screen")
const btn = document.getElementById("btn")

let theme = "Light"

btn.addEventListener("click", () => {
    if(theme == "Light")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        theme = "Dark"
        btn.innerText = "🌅"
        localStorage.setItem("theme", theme)

    }
    else
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        theme = "Light"
        btn.innerText = "🌃"
        localStorage.setItem("theme", theme)
    }
})

window.addEventListener("load", () => {
    let exstingtheme = localStorage.getItem("theme")

    if(exstingtheme == "Light")
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        btn.innerText = "🌃"
        theme = exstingtheme
    }
    else if(exstingtheme == "Dark")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        btn.innerText = "🌅"
        theme = exstingtheme
    }

})