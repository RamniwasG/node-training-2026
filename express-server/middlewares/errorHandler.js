const errorHandler = (err, req, res, next) => {
    console.log(err.message, err.statusCode);
    res.status(res.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error"
    })
}

module.exports = errorHandler