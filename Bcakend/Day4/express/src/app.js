require("dotenv").config()
const express = require("express")
const app = express()
const { ProductsRouter } = require("./routes/Product.route")
const { UsersRouter } = require("./routes/User.route")

app.use("/api/users",UsersRouter)
app.use("/api/products",ProductsRouter)

app.use((req, res) => {
    res.json({
        er : "Not Found"
    })
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})
