const express = require('express')
const { isAuthenticated, isAuthorized } = require('../middlewares/auth')
const asyncHandler = require('./../middlewares/asyncHandler');
const { usersList } = require("./../db/index");
const AppError = require('../utils/AppError');

const router = express()

router.get('/profile', isAuthenticated, asyncHandler(async(req, res) => {
    res.json({
        success: true,
        message: "success!",
        user: req.user
    })
}))

router.get('/users', asyncHandler(async(req, res) => {
    res.json({
        success: true,
        message: "success!",
        user: usersList.filter((user) => user.role !== 'admin')
    })
}))

router.post('/login', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    const isMatched = usersList.find((user) => user.username === username && user.password === password)
    if(!isMatched) {
        throw new AppError("Invalid user!", 401)
    }
    res.json({
        success: true,
        message: "user logged in!"
    })
})

router.post('/create', isAuthorized, asyncHandler(async(req, res) => {
    const { username, password, role } =  req.body
    usersList = [
        {
            id: usersList.length + 1,
            username,
            password,
            role: role || 'user'
        },
        ...usersList
    ]
    res.json({
        success: true,
        message: "user created successfully!",
        users: usersList
                .filter((user) => user.role !== 'admin')
                .sort((a,b) => a>b?1:a<b?-1:0)
    })
}))

router.delete('/remove/:userId', isAuthorized, asyncHandler(async(req, res) => {
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