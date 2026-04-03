const express = require('express')
const app = express()
const PORT = 3000

app.get("/user/:userId", (req, res) => {
    console.log("request params", req.params)
    res.send(`User Id: ${req.params.userId}`)
})

app.get("/user/test", (req, res) => {
    console.log("static route share same root /user", req.params)
    res.send(`User Id: ${req.params.userId}`)
})

app.get("/users", (req, res) => {
    console.log("query params", req.query)
    res.send(req.query)
})

app.post("/users", (req, res) => {
    res.send('user created successfully')
})

app.delete("/user/:userId", (req, res) => {
    res.send(`User Id: [${req.params.userId}] deleted`)
})

app.use("/", (req, res) => {
    console.log("first route")
    res.send("Welcome to dev APIs")
})

app.listen(PORT, () => {
    console.log("server is running at " + PORT)
})