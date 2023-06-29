const express = require("express")
const app = express()
const fs = require("fs")
const LPORT = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/", function(req,res){
    res.type('html').send(getHTML)
})

app.get("/mobile/2.0/article/12345", (req,res) => {
    fs.readFile("public/12345.json", function(error, data){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(data)
    })
})

// app.get("/mobile/2.0/article/123456", (req,res) => {
//     fs.readFile("public/123456.json", function(error, data){
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(data)
//     })
// })

app.get("/enterprisebuild/v5.1", function(req, res){
    fs.readFile("public/enterprise.html", function(error, data){
        res.writeHead(200, {"Content-Type":"text/html"})
        res.end(data)
    })
})

app.get("/mobile/2.0/channel/ushome", function(req, res){
    fs.readFile("public/ushome.json", function(error, data){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(data)
    })
})

app.listen(LPORT, () => {
    console.log(`Up and running on port ${LPORT}`)
})

const getHTML = "<html><head><title>Look Here</title></head><body><h1>Hello There!</h1></body></html>"

const getTestArticle = "<html><head><title>Look Here</title></head><body><h1>Hello There!</h1><script>window.webkit.messageHandlers.vendorCheck.postMessage(\"data\":{\"abc\":\"12345\"})</script></body></html>"