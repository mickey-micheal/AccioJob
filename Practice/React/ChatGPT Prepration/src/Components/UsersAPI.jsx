import { useEffect, useState } from "react"

const UsersAPI = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> {
            if(!res.ok) {
              throw new Error("Failed to fetch users")
            }
           return res.json()
        })
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
        .catch(() => {
            setError("Something went wrong")
        })
        .finally(() => {
            setLoading(false)
        })
    },[])

    if(error)
    {
        return <h1>{error}</h1>
    }

    if(loading)
    {
        return <h1 style={{display : "flex", 
            alignItems : "center" , 
            justifyContent : "center",
            height : "100vh"
        }}>Loading....</h1>
    }

    return (
    <div>
        {users.map((item) => {  
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.phone}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default UsersAPI