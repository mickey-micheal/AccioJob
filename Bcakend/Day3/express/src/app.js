const express = require("express")
const app = express()

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    age: 24,
    city: "Delhi",
    gender: "Male"
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@gmail.com",
    age: 22,
    city: "Mumbai",
    gender: "Female"
  },
  {
    id: 3,
    name: "Aman Verma",
    email: "aman@gmail.com",
    age: 27,
    city: "Noida",
    gender: "Male"
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha@gmail.com",
    age: 25,
    city: "Jaipur",
    gender: "Female"
  },
  {
    id: 5,
    name: "Rohit Kumar",
    email: "rohit@gmail.com",
    age: 30,
    city: "Lucknow",
    gender: "Male"
  },
  {
    id: 6,
    name: "Anjali Yadav",
    email: "anjali@gmail.com",
    age: 21,
    city: "Patna",
    gender: "Female"
  },
  {
    id: 7,
    name: "Vikas Mehta",
    email: "vikas@gmail.com",
    age: 29,
    city: "Gurgaon",
    gender: "Male"
  },
  {
    id: 8,
    name: "Sneha Kapoor",
    email: "sneha@gmail.com",
    age: 26,
    city: "Chandigarh",
    gender: "Female"
  },
  {
    id: 9,
    name: "Arjun Malhotra",
    email: "arjun@gmail.com",
    age: 23,
    city: "Bangalore",
    gender: "Male"
  },
  {
    id: 10,
    name: "Pooja Sharma",
    email: "pooja@gmail.com",
    age: 28,
    city: "Kolkata",
    gender: "Female"
  }
]


app.get("/users", (req, res) => {
    try {
        res.json(users)
    } 
    catch (error) {
        res.json({
            er : error.massage
        })
    }
})

app.delete("/users", (req, res) => {
    try {
        const obj = users.pop()
        res.json({
            msg : "Done",
            delUser : obj
        })
    } 
    catch (error) {
        res.json({
            er : error.massage
        })
    }
})


app.listen(8080, () => {
    console.log("Server Running on Port 8080")
})
