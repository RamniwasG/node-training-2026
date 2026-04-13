const express = require('express')
const app = express()
const PORT = 3000

// db connection
const mongoConnect = require('./config/connection');
const dbConnectRoute = require('./routes/db_connect')
const errorHandler = require('./middlewares/errorHandler');

// const { isAuthenticated } = require('./middleware/auth')
const testUserRoutes = require('./routes/testUser')
const userRoutes = require('./routes/user')
const assignUserRoutes = require('./routes/assignmentUser')
const mongoUserRoutes = require('./routes/mongo_user')

// Routes
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for form data

app.use(dbConnectRoute)
app.use('/testuser', testUserRoutes)
app.use('/admin', userRoutes) // does allow all the HTTP methods
app.use('/user', assignUserRoutes)
app.use('/muser', mongoUserRoutes)

// app.get('/admin/getData', userRoutes) // does allow only get method to hit this url

// routing matching happen exactly not inheritance basic

// app.use('/admin', isAuthenticated)

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

mongoConnect()
.then(() => {
    console.log("DB connected!")
    app.listen(PORT, () => {
        console.log("Server is running at " + PORT)
    })
}).catch(err => {
    console.log("conection failed!")
})
