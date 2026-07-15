import { useState ,useEffect } from "react"
import Loader from "../Components/Loader"
import Card from "../Components/Card"

const api = "https://dummyjson.com/products"

const Products = ({cart ,setcart}) => {

  const [data, setData] = useState([])

  useEffect(() => {

    async function getData()
    {
      const res = await fetch(api)
      const apiData = await res.json()
      setData(apiData.products)
    }

    getData()

  }, [])

  if(data.length == 0)
  {
    return (
      <div className="h-[86vh] flex justify-center items-center">

        <Loader/>

      </div>
    )
  }

  return (
  <div className="min-h-screen bg-gray-100 py-8 px-6">

    <div className="max-w-8xl mx-auto grid gap-8 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4">

      {data.map((item) => (
        <Card key={item.id} cart={cart} setcart={setcart} info={item} />
      ))}

    </div>

  </div>
);
}

export default Products