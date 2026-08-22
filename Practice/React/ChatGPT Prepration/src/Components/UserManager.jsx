import { useState } from "react"

const UserManager = () => {

  const [users , setUsers] = useState([
      { id: 1, name: "Mickey" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Aman" }
  ])

   const [input, setInput] = useState(false)

   const [nid, setId] = useState("")
   const [nname, setName] = useState("")

   const [editid , setEditid] = useState(null)
   const [editname, setEditname] = useState("")

  const del = (id) => {
    setUsers(
        users.filter((user) => {
        return user.id !== id
    }))}

    const add = (e) => {
        e.preventDefault()

        if(!nid || !nname)
        {
            alert("Please enter ID and Name")
            return
        }

        const alreadyExists = users.some((user) => user.id == nid)

         if(alreadyExists){
           alert("This ID already exists")
           return
         }

        setUsers([
            ...users,
            {id : Number(nid), name: nname}
        ])

        setId("")
        setName("")
    }

    const edit = (item) => {
        setEditid(item.id)
        setEditname(item.name)
    }

    const updateuser = (e) => {

        e.preventDefault()

        setUsers(users.map((item) => {
            if(item.id == editid)
            {
                return {
                    ...item,
                    name : editname
                }
            }

            return item
        }))

        setEditid(null)
        setEditname("")
    }

  return (
    <div>
        {users.map((item) => {
            return (
                <div key={item.id}>
                    <div>
                        <h2>{item.id}, {item.name}</h2>

                        <button onClick={() => {
                            edit(item)
                        }}>Edit</button>

                        <button onClick={() => {
                            del(item.id)
                        }}>Delete</button>
                    </div>
               </div>
            )
        })}

        <button onClick={() => {
            setInput(!input)
        }}>{input ? "Hide" : "Add User"}</button>

        {input && <form action="" onSubmit={add}>
            
            <input onChange={(e) => {
                setId(e.target.value)
            }} type="number" value={nid} placeholder="Enter Unque ID"  />

            <input onChange={(e) => {
                setName(e.target.value)
            }} type="text" value={nname} placeholder="Enter Name"  />

                <button type="submit">Add</button>

            </form>}    


            {editid && <form onSubmit={updateuser}action="">

                <input value={editid} type="number" />
                <input onChange={(e) => {
                    setEditname(e.target.value)
                }} value={editname} type="text" />

                <button type="submit">Save</button>

                <button type="button"
                  onClick={() => {
                    setEditid(null);
                    setEditname("");
                }}>Cancel</button>
                
                </form>}
    </div>
  )
}

export default UserManager