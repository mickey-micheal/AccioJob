import { useState } from "react"

const Text = () => {

    const [str,serStr] = useState("")

    return (
    
        <div>
            <input onInput={(e) => {
                serStr(e.target.value)
            }}type="text" />

            <h1>{str}</h1>
        </div>
    )
}

export default Text
