const http = require("http")

const Server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url == "/users" && req.method == "GET")
    {
        res.end("Users API")
    }
    else if(req.url == "/users" && req.method == "DELETE")
    {
        res.end("Users API 2")
    }
    else if(req.url == "/products")
    {
        res.end("Product API")
    }
    else if(req.url == "/about")
    {
        res.writeHead(200, {"content-type": "text/html"})
        res.end(`<h1>Hello World</h1>`)
    }
    else
    {
        res.end("404 => Not Found")
    }

})

Server.listen(8080, () => {
    console.log("Server Running...")
})
