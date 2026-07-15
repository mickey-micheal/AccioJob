import { useState } from "react";
import { createContext, useContext } from "react";


export const Mycontext = createContext()

export function ContextProviter({C})
{
    const [Text , setText ] = useState([])

    return <Mycontext.Provider value={Text ,setText}>
        {C}
    </Mycontext.Provider>
}

export function useinputContext()
{
    return useContext(Mycontext)
}