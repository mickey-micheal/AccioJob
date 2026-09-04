const express = require("express")
const router = express.Router()
const { v4 : uuid } = require("uuid")

let list = []

//params
// router.post("/create/:title/:des", (req, res) => {
// query
// router.post("/create", (req, res) => {
// body
router.post("/create", (req, res) => {
    try {
        // const { title, des } = req.params
        // const { title, des } = req.query
        const { title, des } = req.body
        list.push({
            title, 
            des , 
            id : uuid()
        })
        res.json({
            msg : "done",
            data : list
        })
    } catch (error) {
        res.json({
            er : message
        })
    }
})

router.get("/", (req, res) => {
    try {
        res.json({
            data : list
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

router.get("/:id", (req, res) => {
    try {
        const {id} = req.params
        const findtask = list.find((item) => {
            return item.id == id
        })
        if(!findtask)
        {
            throw new Error("id not found")
        }
        res.json({
            msg : "Found Sucessfully...",
            data : findtask
        })

    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params
        const find = list.find((item) => {
            return item.id == id
        })
        const newlist = list.filter((item) => {
            return item.id !== id
        })

        if(!find)
        {
            throw new Error("id not found to deleted")
        }

        list = newlist

        res.json({
            msg : "Deleted Sucessfully...",
            data : find
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

router.patch("/:id", (req,res) => {
    try {
        const { id } = req.params
        const { title, des } = req.body
        let flag = false

        for (let item of list) 
        {
            if(item.id == id)
            {
                item.title = title
                item.des = des
                flag = true
            }
        }

        if(!flag)
        {
            throw new Error("id not Found to update")
        }

        res.json({
            msg : "Update Sucessfully...",
            data : list
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

module.exports = {
    TodoRoute : router
}