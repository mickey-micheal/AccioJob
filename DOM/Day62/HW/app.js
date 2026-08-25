const inputbar = document.getElementById("inputbar")
const btn = document.getElementById("btn")
const panding = document.getElementById("panding")

btn.addEventListener("click", () => {
    const val = inputbar.value

    if(!val)
    {
        alert("Please fill")
    }

    const card = document.createElement("article")
    card.setAttribute("draggablr" , true)
    card.setAttribute("class" , "my-card")
    card.innerText = val
    panding.append(card)

    inputbar.value = ""
})

card.addEventListener("drag", (e) => {
    e.terget.   
})