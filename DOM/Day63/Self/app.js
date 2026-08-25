const btn = document.getElementById("btn")
const namee = document.getElementById("na")
const email = document.getElementById("em")
const password = document.getElementById("pa")
const age = document.getElementById("ag")

btn.addEventListener("click" ,() => {
    let unval = namee.value
    let emval = email.value
    let passval = password.value
    let ageval = age.value


    if(unval < 4 || unval > 8)
    {
        namee.style.visibility = "visible"
    }
    
    if (!emval.endsWith("@gmail.com")) 
    {   
        email.style.visibility = "visible"
    }
    
    if()
    {
        password.style.visibility = "visible"
    }
    
    if () 
    {
        age.style.visibility = "visible"
    }

})