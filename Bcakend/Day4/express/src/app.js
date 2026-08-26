require("dotenv").config()
const express = require("express")
const app = express()
const { ProductsRouter } = require("./routes/Product.route")
const { UsersRouter } = require("./routes/User.route")

app.use("/api",UsersRouter)
app.use("/api",ProductsRouter)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})
