const express = require('express')
const app = express()

const userRoutes = require('./userRoute')

app.use(express.json())

app.use('/users', userRoutes)

app.use("/", (req, res) => {
    console.log("welcome to Dev API")
    res.send("Welcome to Dev API")
})

app.listen(3000, () => {
    console.log("Server is running at " + 3000)
})
