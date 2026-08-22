

const ProductCard = ({name, price, category, inStock}) => {
  return (
    <div>

        <h1>Product : {name}</h1>
        <p>Price : {price}</p>
        <h2>Category : {category}</h2>
        <h2>Available :{inStock ? "InStock" : "Out of Srock"}</h2>
        
    </div>
  )
}

export default ProductCard
