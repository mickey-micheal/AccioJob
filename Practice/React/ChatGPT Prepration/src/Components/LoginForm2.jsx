import { useState } from "react"

const LoginForm2 = () => {

    const [data ,setData ] = useState({
     name : "",
     email  : "",
     age : "",
     city : ""
    })

    const [sub, setSub] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
    
        setData({
          ...data,
          [name]: value
  })}
                                    
  return (
    <div>

        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(`Name ${data.name}`)
            console.log(`Email ${data.email}`)
            console.log(`Age ${data.age}`)
            console.log(`City ${data.city}`)
            console.log(data)
            setSub(true)
        }} action="">

            <input onChange={handleChange} name="name" value={data.name} type="text" />
            <input onChange={handleChange} name="email" value={data.email} type="email" />
            <input onChange={handleChange} name="age" value={data.age} type="number" />
            <input onChange={handleChange} name="city" value={data.city} type="text" />

            <button type="submit">Submit</button>
        </form>

        {sub && <h1>{`Welcome : ${data.name}`}</h1>}
        {sub && <h1>{`Email : ${data.email}`}</h1>}
        {sub && <h1>{`Age : ${data.age}`}</h1>}
        {sub && <h1>{`City : ${data.city}`}</h1>}

    </div>
  )
}

export default LoginForm2