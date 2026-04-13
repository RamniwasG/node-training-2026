const express = require('express')
const { isAuthenticated, isAuthorized } = require('../middlewares/auth')
const asyncHandler = require('./../middlewares/asyncHandler');
const { getAllBooks, createBook, updateBook, removeBook } = require('../controllers/book');
const { updateLoan, createLoan, getActiveLoans } = require('../controllers/loan');

const router = express()

// books routes
router.get('/books/getAll', getAllBooks)
router.post('/books/create', createBook)
router.put('/books/:bookId', updateBook)
router.delete('/books/:bookId', removeBook)

// loans routes
router.get('/loans/active', getActiveLoans)
router.post('/loans/create', createLoan)
router.patch('/loan/:loanId', updateLoan)
module.exports = router