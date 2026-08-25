const btnm = document.getElementById("minus")
const btnr = document.getElementById("rest")
const btnp = document.getElementById("plus")
const countbar = document.getElementById("count")


btnp.addEventListener("click" , () => {
    let no = Number(countbar.innerText)
    no++
    countbar.innerText = no
})

btnm.addEventListener("click" , () => {
    if(countbar.innerText == 0)
    {
        return
    }
    let no = Number(countbar.innerText)
    no--
    countbar.innerText = no
})

btnr.addEventListener("click" , () => {
    countbar.innerText = "0"
})
