const express = require('express')
const router = express()

router.get("/:userId", (req, res) => {
    console.log("request params", req.params)
    res.send(`User Id: ${req.params.userId}`)
})

router.get("/test", (req, res) => {
    console.log("static route share same root /user", req.params)
    res.send(`User Id: ${req.params.userId}`)
})

router.get("/get", (req, res) => {
    console.log("query params", req.query)
    res.send(req.query)
})

router.post("/add", (req, res) => {
    res.send('user created successfully')
})

router.delete("/:userId", (req, res) => {
    res.send(`User Id: [${req.params.userId}] deleted`)
})

router.use("/", (req, res) => {
    console.log("unknown route")
    res.status(404).send("404, route not found!")
})
module.exports = router;