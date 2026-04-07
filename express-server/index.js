const express = require('express')
const app = express()
const PORT = 3000

// const { isAdmin } = require('./middleware/auth')

const userRoutes = require('./routes/user')

app.use('/admin', userRoutes) // does allow all the HTTP methods
// app.get('/admin/getData', userRoutes) // does allow only get method to hit this url

// routing matching happen exactly not inheritance basic

// app.use('/admin', isAdmin)

// app.get("/admin/getData", (req, res) => {
//     console.log("data sent")
//     res.send("data sent")
// })

// app.get("/admin/deleteData", (req, res) => {
//     console.log("data deleted")
//     res.send("data deleted")
// })

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
    console.log("unknown route")
    res.status(404).send("404, route not found!")
})

app.listen(PORT, () => {
    console.log("server is running at " + PORT)
})