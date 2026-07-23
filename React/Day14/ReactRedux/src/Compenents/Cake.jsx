import {useSelector , useDispatch} from "react-redux"
import { BUY_CAKE, RESTOCKE_CAKE } from "../Utils/Redux/Cake"
import { useState } from "react"

const Cake = () => {

    const dicpatch = useDispatch()
  
    const [q ,setQ] = useState(0)
  
    const val = useSelector((store) => {
        return store.cake.numofcake
    })
  
    return (
      <div>
          <h1>Num of Cake : {val}</h1>
        
          <input type="text" onChange={(e) => {
            setQ(e.target.value)
          }} />
  
          <button onClick={() => {
            dicpatch(BUY_CAKE(q))
          }}>Buy Cake</button>
  
          <button onClick={() => {
            dicpatch(RESTOCKE_CAKE())
          }}>Restock</button>
      </div>
    )
}

export default Cake