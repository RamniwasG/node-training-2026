const { generateISBN13 } = require("../utils/helper");
const Book = require("./../models/Book")
const asyncHandler = require('./../middlewares/asyncHandler');

const getAllBooks = asyncHandler(async (req, res, next) => {
    const books = await Book.find()
    res.json({
        message: 'fetched books successfully!',
        data: books
    })
})

const createBook = asyncHandler(async (req, res, next) => {
    const { title, copiesTotal } = req.body;
    const isbn = generateISBN13()
    const book = await Book.create({
        title,
        isbn,
        copiesTotal, 
        copiesAvailable: copiesTotal
    })
    res.json({
        message: 'book created successfully!',
        data: book
    })
})

const updateBook = asyncHandler(async (req, res, next) => {
    const { bookId } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(
        bookId, 
        {   
            ...req.body,
            copiesAvailable: req.body.copiesTotal
        },
        // { new: true },
        { returnDocument: 'after' } // ''before'
    )
    res.send({
        message: 'book updated successfully!',
        data: updatedBook
    })
})

const removeBook = asyncHandler(async (req, res, next) => {
    const { bookId } = req.params;
    await Book.findByIdAndDelete(bookId)
    res.send({
        message: 'book deleted successfully!',
    })
})


module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    removeBook
}