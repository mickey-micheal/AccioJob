require("dotenv").config()
const express = require("express")
const app = express()
const { ProductRoute } = require("./routes/Products.route")
const { UsersRoute } = require("./routes/Users.route")
const { CountRoute } = require("./routes/Count.route")

app.use("/api/products", ProductRoute)
app.use("/api/users", UsersRoute)
app.use("/api/counter", CountRoute)

app.use((req, res) => {
    res.json({
        er : "Not Found"
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
