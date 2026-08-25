const addbtn = document.getElementById("btn")
const sidecaed = document.getElementById("em")
const titlebar = document.getElementById("top")
const dbar = document.getElementById("bottom")

addbtn.addEventListener("click" ,() => {

    if(!titlebar.value || !dbar.value)
    {
        alert("Pleas fille")
        return
    }

    const card = document.createElement("article")

    const div = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.innerText = titlebar.value

    const p = document.createElement("p")
    p.innerText = dbar.value

    const cros = document.createElement("p")
    cros.innerText = "❌"

    cros.addEventListener("click",() => {
        card.remove()
    })

    div.append(h2,p)
    card.append(div,cros)

    card.style.backgroundColor="white"
    card.style.borderRadius="10px"
    card.style.paddingLeft="5px"
    card.style.paddingRight="5px"
    card.style.display="flex"
    card.style.justifyContent="space-between"
    cros.style.paddingTop="20px"

    sidecaed.append(card)

    titlebar.value = ""
    dbar.value = ""
    
})