import { useState } from "react"

const LoginForm = () => {

    const [name ,setName ] = useState("")
    const [email ,setEmail ] = useState("")
    const [sub , setSub] = useState(false)

  return (

    <div>
        <form onSubmit={(e) => {
        e.preventDefault()
        console.log(`Name : ${name}`)
        console.log(`Email : ${email}`)
        setSub(true)
        }}>

            <input value={name} type="text" onChange={(e) => {
                setName(e.target.value)
            }}/>
    
            <input value={email} type="text" onChange={(e) => {
                setEmail(e.target.value)
            }} />
    
            <button type="submit">Submit</button>

       </form>

       {sub && <h1>{`Welcome, ${name}!`}</h1>}

       {sub && <h1>{`Your email is ${email}`}</h1>}

    </div>
    
  )
}

export default LoginForm