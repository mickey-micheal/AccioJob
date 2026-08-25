const box = document.getElementById("box")
const cart = document.getElementById("cart")


box.addEventListener("click" , (e) => {

    if(e.target.tagName == "MAIN")
    {
        return
    }

    let curr = e.target.innerText
    cart.innerText = curr + ", " + cart.innerText

})


