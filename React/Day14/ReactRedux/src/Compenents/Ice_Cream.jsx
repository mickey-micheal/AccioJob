import { useSelector, useDispatch } from "react-redux"
import { BUY_ICECREAM, RESTOCK_ICECREAM } from "../Utils/Redux/IceCream"
import { useState } from "react"

const Ice_Cream = () => {

    const dispatch = useDispatch()

    const [q ,setQ] = useState(0)

    const val = useSelector((Store) => {
        return Store.icecream.numoficecream
    })

    return (
      <div>
          <h1>Num of IceCream : {val}</h1>
  
          <input type="text" onChange={(e) => {
              setQ(e.target.value)
          }}/>
  
          <button onClick={() => {
              dispatch(BUY_ICECREAM(q))
          }}>Buy Ice Cream</button>
  
          <button onClick={() => {
              dispatch(RESTOCK_ICECREAM())
          }}>Reastock</button>
      </div>
    )
}

export default Ice_Cream