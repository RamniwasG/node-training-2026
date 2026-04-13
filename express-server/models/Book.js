const mongoose = require('mongoose')
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    copiesTotal: { type: Number, default: 0 },
    copiesAvailable: { type: Number, default: 0 }
},{ timestamps: true })

module.exports = mongoose.model('Book', BookSchema)
