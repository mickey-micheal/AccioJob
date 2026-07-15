

const Card = ({ info , cart , setcart }) => {
  const {images, description, price, rating, title, availabilityStatus,} = info

  return (
    <article className="my-4 w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      <img
        src={images[0]}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-3">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
            {title}
          </h2>
  
          <div className="flex items-center justify-between">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-sm font-semibold">
                ⭐ {rating}
              </span>
    
              <span className="text-green-600 text-sm font-medium">
                {availabilityStatus}
              </span>
          </div>
  
          <p className="text-2xl font-bold text-blue-600">
            ${price}
          </p>
  
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
  
          <button onClick={() => {
            const exists = cart.some(item => item.id === info.id)
          
            if(exists)
            {
              setcart(cart.map(item =>
                  item.id === info.id ? { ...item, q: item.q + 1 } : item
                )
              )
            } 
            else
            {
              setcart([...cart, { ...info, q: 1 }]);
            }

          }} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition">
            Add to Cart
          </button>
      </div>
    </article>
  )
}

export default Card