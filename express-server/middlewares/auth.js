const isAdmin = (req, res, next) => {
    console.log("called")
    next()
}

module.exports = { isAdmin }