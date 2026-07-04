import Counter from "./Components/Counter"
import Text from "./Components/Text"
import Sidebar from "./Components/Sidebar"
import { useState } from "react"

const App = () => {

  const [Dark , setDark] = useState(false)
  
  return (

    <div style={{backgroundColor : Dark ? "gray" : "white"}}>

      <nav>

        <button onClick={(e) => {
          console.log(e)
          if(!Dark)
          {
            e.target.innerText = "🌅"
            setDark(!Dark)
          }
          else
          {
            e.target.innerText = "🌃"
            setDark(Dark)
          }
          
        }}>🌃</button>

      </nav>

      <div style={{display : "flex"}}>
  
        <Sidebar/>
        
        <div>
    
          <Counter/>
          <hr/>
          <Text/>
        
        </div>

      </div>

    </div>

  )
}

export default App