const express = require("express")
const router = express.Router()


const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    rating: 3.28,
    stock: 44,
    brand: "Glamour Beauty"
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    rating: 4.64,
    stock: 59,
    brand: "Velvet Touch"
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    price: 12.99,
    rating: 4.36,
    stock: 68,
    brand: "Chic Cosmetics"
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    price: 8.99,
    rating: 4.32,
    stock: 71,
    brand: "Nail Couture"
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    rating: 4.37,
    stock: 17,
    brand: "Calvin Klein"
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    category: "fragrances",
    price: 129.99,
    rating: 4.26,
    stock: 41,
    brand: "Chanel"
  },
  {
    id: 8,
    title: "Dior J'adore",
    category: "fragrances",
    price: 89.99,
    rating: 3.8,
    stock: 91,
    brand: "Dior"
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    category: "fragrances",
    price: 69.99,
    rating: 3.96,
    stock: 3,
    brand: "Dolce & Gabbana"
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    category: "fragrances",
    price: 79.99,
    rating: 2.74,
    stock: 93,
    brand: "Gucci"
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    category: "furniture",
    price: 1899.99,
    rating: 4.14,
    stock: 88,
    brand: "Annibale Colombo"
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    category: "furniture",
    price: 2499.99,
    rating: 3.92,
    stock: 6,
    brand: "Annibale Colombo"
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    category: "furniture",
    price: 299.99,
    rating: 4.7,
    stock: 16,
    brand: "WoodCraft"
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    category: "furniture",
    price: 499.99,
    rating: 4.88,
    stock: 26,
    brand: "Knoll"
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    category: "furniture",
    price: 799.99,
    rating: 3.59,
    stock: 64,
    brand: "Bath Decor"
  },
  {
    id: 16,
    title: "Apple MacBook Pro 14 Inch",
    category: "laptops",
    price: 1999.99,
    rating: 4.57,
    stock: 83,
    brand: "Apple"
  },
  {
    id: 17,
    title: "Asus Zenbook Pro Dual Screen",
    category: "laptops",
    price: 1799.99,
    rating: 4.64,
    stock: 53,
    brand: "Asus"
  },
  {
    id: 18,
    title: "Huawei Matebook X Pro",
    category: "laptops",
    price: 1399.99,
    rating: 4.5,
    stock: 17,
    brand: "Huawei"
  },
  {
    id: 19,
    title: "Lenovo Yoga 920",
    category: "laptops",
    price: 1299.99,
    rating: 4.35,
    stock: 49,
    brand: "Lenovo"
  },
  {
    id: 20,
    title: "New Microsoft Surface Laptop 4",
    category: "laptops",
    price: 1499.99,
    rating: 4.25,
    stock: 68,
    brand: "Microsoft"
  },
  {
    id: 21,
    title: "Iphone X",
    category: "smartphones",
    price: 899.99,
    rating: 4.67,
    stock: 95,
    brand: "Apple"
  },
  {
    id: 22,
    title: "Samsung Galaxy S10",
    category: "smartphones",
    price: 699.99,
    rating: 4.3,
    stock: 84,
    brand: "Samsung"
  },
  {
    id: 23,
    title: "Huawei P30",
    category: "smartphones",
    price: 499.99,
    rating: 4.09,
    stock: 32,
    brand: "Huawei"
  },
  {
    id: 24,
    title: "Oppo A57",
    category: "smartphones",
    price: 249.99,
    rating: 4.18,
    stock: 63,
    brand: "Oppo"
  },
  {
    id: 25,
    title: "Realme X",
    category: "smartphones",
    price: 299.99,
    rating: 4.44,
    stock: 78,
    brand: "Realme"
  },
  {
    id: 26,
    title: "Leather Jacket",
    category: "mens-jackets",
    price: 89.99,
    rating: 4.64,
    stock: 45,
    brand: "Fashion Hub"
  },
  {
    id: 27,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    category: "mens-shirts",
    price: 22.99,
    rating: 4.35,
    stock: 57,
    brand: "Hanes"
  },
  {
    id: 28,
    title: "Mens Cotton Jacket",
    category: "mens-jackets",
    price: 55.99,
    rating: 4.72,
    stock: 23,
    brand: "Zara"
  },
  {
    id: 29,
    title: "Mens Casual Slim Fit",
    category: "mens-shirts",
    price: 19.99,
    rating: 4.45,
    stock: 31,
    brand: "Roadster"
  },
  {
    id: 30,
    title: "Mens Short Sleeve T-Shirt",
    category: "mens-shirts",
    price: 15.99,
    rating: 4.12,
    stock: 76,
    brand: "Levis"
  }
]

router.get("/", (req , res) => {
    try {
        res.json({
            data : products
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

router.delete("/", (req, res) => {
    try {
        const obj = products.pop()
        res.json({
            msg : "Products Deleted",
            delproduct : obj
        })
    } catch (error) {
        res.json({
            er :error.message
        })
    }
})

module.exports = {
    ProductRoute : router
}