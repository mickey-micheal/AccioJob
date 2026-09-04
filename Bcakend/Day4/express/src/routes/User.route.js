const express = require("express")
const router = express.Router()

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    gender: "male",
    email: "john.doe@gmail.com",
    phone: "+1 555-0101",
    username: "johndoe"
  },
  {
    id: 2,
    firstName: "Emily",
    lastName: "Smith",
    age: 24,
    gender: "female",
    email: "emily.smith@gmail.com",
    phone: "+1 555-0102",
    username: "emilysmith"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 32,
    gender: "male",
    email: "michael.johnson@gmail.com",
    phone: "+1 555-0103",
    username: "michaelj"
  },
  {
    id: 4,
    firstName: "Sophia",
    lastName: "Williams",
    age: 26,
    gender: "female",
    email: "sophia.williams@gmail.com",
    phone: "+1 555-0104",
    username: "sophiaw"
  },
  {
    id: 5,
    firstName: "Daniel",
    lastName: "Brown",
    age: 35,
    gender: "male",
    email: "daniel.brown@gmail.com",
    phone: "+1 555-0105",
    username: "danielbrown"
  },
  {
    id: 6,
    firstName: "Olivia",
    lastName: "Jones",
    age: 22,
    gender: "female",
    email: "olivia.jones@gmail.com",
    phone: "+1 555-0106",
    username: "oliviaj"
  },
  {
    id: 7,
    firstName: "James",
    lastName: "Garcia",
    age: 41,
    gender: "male",
    email: "james.garcia@gmail.com",
    phone: "+1 555-0107",
    username: "jamesgarcia"
  },
  {
    id: 8,
    firstName: "Ava",
    lastName: "Miller",
    age: 29,
    gender: "female",
    email: "ava.miller@gmail.com",
    phone: "+1 555-0108",
    username: "avamiller"
  },
  {
    id: 9,
    firstName: "William",
    lastName: "Davis",
    age: 37,
    gender: "male",
    email: "william.davis@gmail.com",
    phone: "+1 555-0109",
    username: "williamd"
  },
  {
    id: 10,
    firstName: "Isabella",
    lastName: "Rodriguez",
    age: 31,
    gender: "female",
    email: "isabella.rodriguez@gmail.com",
    phone: "+1 555-0110",
    username: "isabellar"
  },
  {
    id: 11,
    firstName: "Alexander",
    lastName: "Martinez",
    age: 27,
    gender: "male",
    email: "alexander.martinez@gmail.com",
    phone: "+1 555-0111",
    username: "alexmartinez"
  },
  {
    id: 12,
    firstName: "Mia",
    lastName: "Hernandez",
    age: 25,
    gender: "female",
    email: "mia.hernandez@gmail.com",
    phone: "+1 555-0112",
    username: "miahernandez"
  },
  {
    id: 13,
    firstName: "Ethan",
    lastName: "Lopez",
    age: 30,
    gender: "male",
    email: "ethan.lopez@gmail.com",
    phone: "+1 555-0113",
    username: "ethanlopez"
  },
  {
    id: 14,
    firstName: "Charlotte",
    lastName: "Gonzalez",
    age: 34,
    gender: "female",
    email: "charlotte.gonzalez@gmail.com",
    phone: "+1 555-0114",
    username: "charlotteg"
  },
  {
    id: 15,
    firstName: "Matthew",
    lastName: "Wilson",
    age: 39,
    gender: "male",
    email: "matthew.wilson@gmail.com",
    phone: "+1 555-0115",
    username: "mattheww"
  },
  {
    id: 16,
    firstName: "Amelia",
    lastName: "Anderson",
    age: 23,
    gender: "female",
    email: "amelia.anderson@gmail.com",
    phone: "+1 555-0116",
    username: "ameliaa"
  },
  {
    id: 17,
    firstName: "David",
    lastName: "Thomas",
    age: 45,
    gender: "male",
    email: "david.thomas@gmail.com",
    phone: "+1 555-0117",
    username: "davidthomas"
  },
  {
    id: 18,
    firstName: "Harper",
    lastName: "Taylor",
    age: 28,
    gender: "female",
    email: "harper.taylor@gmail.com",
    phone: "+1 555-0118",
    username: "harpert"
  },
  {
    id: 19,
    firstName: "Joseph",
    lastName: "Moore",
    age: 33,
    gender: "male",
    email: "joseph.moore@gmail.com",
    phone: "+1 555-0119",
    username: "josephmoore"
  },
  {
    id: 20,
    firstName: "Evelyn",
    lastName: "Jackson",
    age: 36,
    gender: "female",
    email: "evelyn.jackson@gmail.com",
    phone: "+1 555-0120",
    username: "evelynj"
  },
  {
    id: 21,
    firstName: "Christopher",
    lastName: "White",
    age: 42,
    gender: "male",
    email: "christopher.white@gmail.com",
    phone: "+1 555-0121",
    username: "chriswhite"
  },
  {
    id: 22,
    firstName: "Abigail",
    lastName: "Harris",
    age: 27,
    gender: "female",
    email: "abigail.harris@gmail.com",
    phone: "+1 555-0122",
    username: "abigailh"
  },
  {
    id: 23,
    firstName: "Andrew",
    lastName: "Martin",
    age: 29,
    gender: "male",
    email: "andrew.martin@gmail.com",
    phone: "+1 555-0123",
    username: "andrewmartin"
  },
  {
    id: 24,
    firstName: "Ella",
    lastName: "Thompson",
    age: 21,
    gender: "female",
    email: "ella.thompson@gmail.com",
    phone: "+1 555-0124",
    username: "ellathompson"
  },
  {
    id: 25,
    firstName: "Joshua",
    lastName: "Garcia",
    age: 38,
    gender: "male",
    email: "joshua.garcia@gmail.com",
    phone: "+1 555-0125",
    username: "joshuag"
  },
  {
    id: 26,
    firstName: "Elizabeth",
    lastName: "Martinez",
    age: 30,
    gender: "female",
    email: "elizabeth.martinez@gmail.com",
    phone: "+1 555-0126",
    username: "elizabethm"
  },
  {
    id: 27,
    firstName: "Ryan",
    lastName: "Robinson",
    age: 26,
    gender: "male",
    email: "ryan.robinson@gmail.com",
    phone: "+1 555-0127",
    username: "ryanrobinson"
  },
  {
    id: 28,
    firstName: "Sofia",
    lastName: "Clark",
    age: 33,
    gender: "female",
    email: "sofia.clark@gmail.com",
    phone: "+1 555-0128",
    username: "sofiaclark"
  },
  {
    id: 29,
    firstName: "Nathan",
    lastName: "Lewis",
    age: 40,
    gender: "male",
    email: "nathan.lewis@gmail.com",
    phone: "+1 555-0129",
    username: "nathanlewis"
  },
  {
    id: 30,
    firstName: "Grace",
    lastName: "Walker",
    age: 24,
    gender: "female",
    email: "grace.walker@gmail.com",
    phone: "+1 555-0130",
    username: "gracewalker"
  }
]


router.get("/", (req, res) => {
    try {
        res.json({
            data : users
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

router.delete("/", (req, res) => {
    try {
        const obj = users.pop()
        res.json({
            msg : "Users Deleted",
            delusers : obj
        })
    } catch (error) {
        res.json({
            er : error.message
        })
    }
})

module.exports = {
    UsersRouter : router
}
