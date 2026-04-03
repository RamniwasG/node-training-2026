const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

// get vs use => whichever written first will get executed first
app.use("/test", (req, res) => {
    console.log("first/default route")
    res.send("first route hit")
})
app.get('/test', (req, res) => {
    res.send("hello world!")
})







app.listen(PORT, () => {
    console.log("server is running at " + PORT)
})