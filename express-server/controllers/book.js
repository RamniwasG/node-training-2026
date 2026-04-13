const { generateISBN13 } = require("../utils/helper");
const Book = require("./../models/Book")

const getAllBooks = async (req, res, next) => {
    const books = await Book.find()
    res.json({
        message: 'fetched books successfully!',
        data: books
    })
}

const createBook = async (req, res, next) => {
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
}

const updateBook = async (req, res, next) => {
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
}

const removeBook = async (req, res, next) => {
    const { bookId } = req.params;
    await Book.findByIdAndDelete(bookId)
    res.send({
        message: 'book deleted successfully!',
    })
}


module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    removeBook
}