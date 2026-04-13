const mongoose = require('mongoose');
const Loan = require("./../models/Loan")
const Book = require("./../models/Book")

const getActiveLoans = async (req, res, next) => {
    const { status, borrowerEmail } = req.query;
    const loans = await Loan.find({ status, borrowerEmail }).populate("bookId", "title isbn")
    res.status(200).json({
        message: 'active loans fetched successfully!',
        data: loans
    })
}

const createLoan = async (req, res, next) => {
    const { bookId, borrowerEmail } = req.body;
    
    const bookFound = await Book.findById(bookId)
    if(!bookFound) return res.status(404).send('Book not found!');
    
    if(bookFound.copiesAvailable <= 0) {
        return res.status(400).send("There is no copies available now, Please try after some time!")
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
    }
    catch(err) {
        await session.abortTransaction()
        res.status(500).send(err.message)
    } finally {
        session.endSession()
    }
}

const updateLoan = async (req, res, next) => {
    const { loanId } = req.params;
    const loan = await Loan.findById(loanId)
    if(!loan)
        return res.status(404).send("Loan does't exist!")
    
    if(!loan.status) {
        return res.status(400).send("Book has already returned!")
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
        res.status(500).send(err.message)
    } finally {
        session.endSession()
    }
}


module.exports = {
    getActiveLoans,
    createLoan,
    updateLoan,
}