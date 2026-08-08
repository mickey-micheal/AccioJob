import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addfri, get } from "../Utils/FriendSlice"

const Home = () => {

    const dispatch = useDispatch()

    const { data, loading, error } = useSelector((store) => store.Friend)
  
    useEffect(() => {
      
      dispatch(get())
      
    }, [dispatch])
  
    if(loading)
    {
      return <h1 className="flex justify-center text-5xl ">Loading...</h1>
    }
  
    if(error)
    {
      return <h1>{error}</h1>
    }
  
    return (
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div className="border w-70 h-50 text-center " key={item.id}>

            <img className="py-2" src={item.image} alt={item.firstName} width="100" />

            <h2 className="py-2">{item.name} {item.lastName}</h2>

            <p className="py-2">Email : {item.email}</p>

            <p className="py-2">Phone : {item.phone}</p>

            <button onClick={() => {
                dispatch(addfri(item))
            }} className="border bg-pink-400 w-25 rounded-md py-1 my-2 cursor-pointer hover:bg-pink-600">Friend</button>

          </div>
        ))}
      </div>
    )
}

export default Home;