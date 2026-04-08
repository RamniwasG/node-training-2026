const { usersList } = require('../db');
const AppError = require('../utils/AppError');

const isAuthenticated = (req, res, next) => {
    const { username, password } = req.query
    const user = usersList.find(user => user.username === username && user.password === password)
    console.log("query data", username)
    if(!user) {
        throw new AppError('Invalid user!', 401)
    }
    req.user = { ...user }
    next()
}

const isAuthorized = (req, res, next) => {
    const { authorization } = req.headers
    console.log("auth key: ", authorization)
    if(!authorization) {
        throw new AppError('Unauthorized!', 403)
    }
    next()
}

module.exports = { isAuthenticated, isAuthorized }