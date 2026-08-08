import { useDispatch, useSelector } from "react-redux"
import { blockfri  } from "../Utils/FriendSlice"

const Friends = () => {

    const dis = useDispatch()

    const data = useSelector((store) => {
        return store.Friend
    })

    if(data.fri == 0)
    {
        return <h1 className="flex justify-center text-5xl ">No Friends</h1>
    }
  
    return (
        <div className="grid grid-cols-4 gap-4">

          {data.fri.map((item) => (
            
            <div className="border w-70 h-50 text-center " key={item.id}>

              <img className="py-2" src={item.image} alt={item.firstName} width="100" />

              <h2 className="py-2">{item.name} </h2>

              <p className="py-2">Email : {item.email}</p>

              <p className="py-2">Phone : {item.phone}</p>

              <button onClick={() => {
                  dis(blockfri(item.id))
              }} className="border bg-pink-400 w-25 rounded-md py-1 my-2 cursor-pointer hover:bg-pink-600">Unfriend</button>

            </div>
          ))}
        </div>
    )
}

export default Friends