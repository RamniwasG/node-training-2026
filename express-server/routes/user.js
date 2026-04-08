const express = require('express')
const { isAuthenticated } = require('../middlewares/auth')
const asyncHandler = require('./../middlewares/asyncHandler');
const AppError = require('../utils/AppError');

const router = express()

router.get('/getData', isAuthenticated, (req, res) => {
    console.log("data sent")
    res.send("data retrieved ")
})
router.get('/deleteData', isAuthenticated, (req, res) => {
    console.log("deleted")
    res.send("delete data ")
})

router.get('/getUserData', asyncHandler(async(req, res) => {
    console.log("user data")
    const user = null
    if(!user) {
        throw new AppError('Page not found!', 404)
    }
    res.json({
        success: true,
        message: "user data retrieved successfully!"
    })
}))


module.exports = router