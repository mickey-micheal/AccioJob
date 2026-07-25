import { useSelector } from "react-redux"

const Display = () => {

  const data = useSelector((store) => store.list.data)

  return (
    
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>

            <h1>{item.title}</h1>
            <p>{item.disc}</p>

          </div>
        )
      })}
    </div>
   
  )
}

export default Display
