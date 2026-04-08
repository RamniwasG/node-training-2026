class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
        this.isOperationa = true
    }
}

module.exports = AppError
