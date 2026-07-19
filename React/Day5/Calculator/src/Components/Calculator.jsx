import { useState } from "react"

const Calculator = () => {

    const [val, setVal] = useState("0")

    function btnclick(e)
    {
        if(val == "0")
        {
            setVal(e.target.innerText)
        }
        else
        {
            setVal(val + e.target.innerText)
        }
    }

  return (
    <div id="screen">

        <div id="display">{val}</div>

        <div id="btns">
            <button onClick={() => setVal("0")} className="btn">C</button>
            <button onClick={btnclick} className="btn">0</button>
            <button onClick={btnclick} className="btn">/</button>
            <button onClick={btnclick} className="btn">x</button>
            <button onClick={btnclick} className="btn">7</button>
            <button onClick={btnclick} className="btn">8</button>
            <button onClick={btnclick} className="btn">9</button>
            <button onClick={btnclick} className="btn">--</button>
            <button onClick={btnclick} className="btn">4</button>
            <button onClick={btnclick} className="btn">5</button>
            <button onClick={btnclick} className="btn">6</button>
            <button onClick={btnclick} className="btn">+</button>
            <button onClick={btnclick} className="btn">1</button>
            <button onClick={btnclick} className="btn">2</button>
            <button onClick={btnclick} className="btn">3</button>
            <button onClick={() => {
                Number(val)

            } } className="btn">=</button>
        </div>

    </div>
  )
}

export default Calculator