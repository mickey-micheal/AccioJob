const express = require("express")
const router = express.Router()

let counter = {
    count : 0
}

router.patch("/increase", (req, res) => {
    try {
        counter.count++

        res.json({
            message: "Count increased",
            count: counter
        })
    } catch (error) {
        res.json({
            er: error.message
        })
    }
})

router.patch("/decrease", (req, res) => {
    try {
        counter.count--

        res.json({
            message: "Count decreased",
            count: counter
        })
    } catch (error) {
        res.json({
            er: error.message
        })
    }
})

router.patch("/reset", (req, res) => {
    try {
        counter.count = 0

        res.json({
            message: "Count reset",
            count: counter
        })
    } catch (error) {
        res.json({
            er: error.message
        })
    }
})

router.get("/", (req, res) => {
    res.json({
        count: count
    })
})

module.exports = {
    CountRoute: router
}