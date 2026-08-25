const fs = require("fs")

fs.writeFile("./dummy.txt", "Mickey Singh", () => {
    console.log("file Added")
})

fs.writeFileSync("./dummy2.txt", "Mickey Michael")


// fs.readFile("dummy.txt" , "utf-8" , (error, data) => {
//     if(error)
//     {
//         console.log(error)
//     }
//     else
//     {
//         console.log(data)
//     }

// })

// const val = fs.readFileSync("dummy2.txt", "utf-8")
// console.log(val)


// fs.appendFile("dummy.txt", "\nMickey Michael", () => {
//     console.log("ok")
// })

// fs.appendFileSync("dummy2.txt", "\nMickey Singh")


// fs.unlink("dummy.txt", () => {
//     console.log("file d")
// })

// fs.unlinkSync("dummy2.txt")

// fs.mkdir("../demo", () => {
//     console.log("f c")
// })

// fs.mkdirSync("../demo2")

// fs.rmdir("./demo", () => {
//     console.log("d f")
// })

// fs.rmdirSync("./demo2")

fs.rename("dummy.txt", "mickey.txt", () => {
    console.log("first")
})

fs.renameSync("dummy2.txt", "michael.txt")

console.log("Done")
