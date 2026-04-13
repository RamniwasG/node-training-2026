const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({ quiet: true });

const connectDB = async () =>  {
    await mongoose.connect(process.env.MONGO_CLOUD_URL)
}

module.exports = connectDB