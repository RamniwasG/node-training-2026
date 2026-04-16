const mongoose = require('mongoose');
const Loan = require("./../models/Loan")
const Book = require("./../models/Book")
const asyncHandler = require('./../middlewares/asyncHandler');
const AppError = require('./../utils/AppError');

const getActiveLoans = asyncHandler(async (req, res, next) => {
    const { status, borrowerEmail } = req.query;
    const loans = await Loan.find({ status, borrowerEmail }).populate("bookId", "title isbn")
    res.status(200).json({ message: 'active loans fetched successfully!', data: loans })
})

const createLoan = asyncHandler(async (req, res, next) => {
    const { bookId, borrowerEmail } = req.body;
    const bookFound = await Book.findById(bookId)
    if(!bookFound) throw new AppError('Book not found!', 404);
    
    if(bookFound.copiesAvailable <= 0) {
        throw new AppError("There is no copies available now, Please try after some time!", 401);
    }
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const loan = await Loan.create({ bookId, borrowerEmail });
        await Book.findByIdAndUpdate(
            bookId,
            { $inc: { copiesAvailable: -1 }},
            { session }
        )
        await session.commitTransaction()
        res.json({
            message: `successful borrow on book id: ${bookId}`,
            data: loan
        })
    } catch(err) {
        await session.abortTransaction()
        throw new AppError(err.message, 500);
    } finally {
        session.endSession()
    }
})

const updateLoan = asyncHandler(async (req, res, next) => {
    const { loanId } = req.params;
    const loan = await Loan.findById(loanId)
    if(!loan)
        throw new AppError("Loan does't exist!", 404);
    
    if(!loan.status) {
        throw new AppError("Book has already returned!", 400);
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        loan.status = false
        await loan.save({ session })
        await Book.findByIdAndUpdate(
            loan.bookId,
            { $inc: { copiesAvailable:  1 }},
            { session }
        )
        await session.commitTransaction()
        res.send({
            message: 'Book returned!',
        })
    } catch(err) {
        await session.abortTransaction()
        throw new AppError(err.message, 500)
    } finally {
        session.endSession()
    }
})


module.exports = {
    getActiveLoans,
    createLoan,
    updateLoan,
}