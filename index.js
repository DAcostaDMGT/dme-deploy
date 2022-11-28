const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.static("public"))

app.get("/", function(req,res){
    res.type('html').send(getHTML)
})

app.listen(process.env.PORT || 5000)

const getHTML = "<html><body><h1>Hello There!</h1></body></html>"