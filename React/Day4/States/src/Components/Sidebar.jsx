import { useState } from "react"

const Sidebar = () => {

    const [sbar,setsbar] = useState(false)
    
    return (
        <aside 
           onMouseEnter={() => {
            setsbar(true)
           }}
           onMouseLeave={() => {
            setsbar(false)
           }}
           style={{height : "100vh", 
                  backgroundColor : "orange",
                  width : sbar ? "20vw" : "5vw"
            }}>
                
        </aside>
    )
}

export default Sidebar