import {useSelector} from "react-redux"

const Display = () => {

    const storeData = useSelector((store) => store.data)

    return (
    <ul>
        {storeData.map((item) => {
            return <li>{item}</li>
        })}
        
    </ul>
  )
}

export default Display