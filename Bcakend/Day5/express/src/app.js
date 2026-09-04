require("dotenv").config()
const express = require("express")
const app = express()
const { TodoRoute } = require("./routes/todo.route")

app.use(express.json())
app.use("/api/todos", TodoRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server Running")
})
