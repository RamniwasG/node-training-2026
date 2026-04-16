const AppError = require('../utils/AppError');

const isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized!'})
    }
    const authToken = authHeader.split(" ")[1]
    console.log("auth key: ", authToken)
    if(authToken !== 'admin123') {
        console.log("unauthenticated")
        throw new AppError('Unauthorized!', 401)
    }
    const loggedInUser = { username: 'admin', role: 'admin' }
    req.abc = loggedInUser;
    
    next()
}

const isAuthorized = (...roles) => {
    return (req, res, next) => {
        console.log("inside authorized", roles, req.abc)
        if(!req.abc) {
            return res.status(401).json({message: "Unauthorized!"})
        }
        
        if(!roles.includes(req.abc.role)) {
            return res.status(403).send({message: "Forbidden!"})
        }
        console.log('authorized')
        next()
    }
}

module.exports = { isAuthenticated, isAuthorized }