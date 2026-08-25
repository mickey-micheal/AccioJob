const addbtn = document.getElementById("btn")
const sidecaed = document.getElementById("em")
const titlebar = document.getElementById("top")

addbtn.addEventListener("click" ,() => {

    if(!titlebar.value)
    {
        alert("Please fill")
        return
    }

    const li = document.createElement("li")
    li.innerText = titlebar.value
    li.style.backgroundColor="white"
    li.style.borderRadius="10px"
    li.style.marginBottom="10px"
    li.style.paddingLeft="10px"
    sidecaed.append(li)
    titlebar.value = ""

    sidecaed.addEventListener("click",(e) => {

        if(e.target.tagName == "LI")
        {
            e.target.remove()
        }
    })
})