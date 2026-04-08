const express = require('express')
const app = express()
const PORT = 3000

// const { isAdmin } = require('./middleware/auth')
const testUserRoutes = require('./routes/testUser')
const userRoutes = require('./routes/user')
const dbConnectRoute = require('./routes/db')
const errorHandler = require('./middlewares/errorHandler');

// Routes
app.use('/', dbConnectRoute)
app.use('/testuser', testUserRoutes)
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


// GLOBAL Error handler (always place at last)
// app.use((err, req, res, next) => {
//     console.log(err.message)
//     res.json({
//         success: false,
//         message: err.message || "Internal Server Error"
//     })
// })
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("server is running at " + PORT)
})