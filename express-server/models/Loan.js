const mongoose = require('mongoose')
const { Schema } = mongoose;

const LoanSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    borrowerEmail: { type: String, required: true },
    borrowedAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
},{ timestamps: true })

module.exports = mongoose.model('Loan', LoanSchema)
