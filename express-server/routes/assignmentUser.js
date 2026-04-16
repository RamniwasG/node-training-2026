const express = require('express')
const { isAuthenticated, isAuthorized } = require('../middlewares/auth')
const asyncHandler = require('./../middlewares/asyncHandler');
const { usersList } = require("./../db/index");
const AppError = require('../utils/AppError');

const router = express()

// Public Routes
router.post('/login', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    const isMatched = usersList.find((user) => 
        user.username === username && user.password === password)

    if(!isMatched) {
        throw new AppError("Invalid user!", 401)
    }
    res.json({ success: true, message: "user logged in!" })
})

router.get('/users', asyncHandler(async(req, res) => {
    res.json({
        success: true,
        message: "success!",
        user: usersList.filter((user) => user.role !== 'admin')
    })
}))

// Protected Routes
router.get('/profile', isAuthenticated, asyncHandler(async(req, res) => {
    res.json({ success: true, message: "success!", user: req.user })
}))

router.post('/create', 
    isAuthenticated, 
    isAuthorized('admin'), 
    asyncHandler(async(req, res) => {
    const { username, password, role } =  req.body
    const newUser = { id: usersList.length + 1, username, password, role: role || 'user' }
    usersList.unshift(newUser)
    res.json({ success: true, message: "user created successfully!", users: usersList })
}))

router.delete('/remove/:userId', 
    isAuthenticated, 
    isAuthorized('admin'), 
    asyncHandler(async(req, res) => {
    const { userId } =  req.params
    const filteredUsers = usersList.filter(user => user.id.toString() !== userId)
    res.json({
        success: true,
        message: "user deleted successfully!",
        users: filteredUsers
    })
}))


router.delete('/error', asyncHandler(async(req, res) => {
    throw new AppError("Something went wrong!")
}))


module.exports = router