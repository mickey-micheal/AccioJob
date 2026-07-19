const h1 = document.getElementById("h1")

h1.addEventListener("click", () => {
    console.log("first")
})

function btnHandler()
{
    console.log("qwerty")
}

h1.addEventListener("click", btnHandler)


