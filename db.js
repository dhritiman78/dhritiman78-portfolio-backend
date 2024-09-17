require('dotenv').config();

const mongoose = require('mongoose');
const URI = process.env.EXPRESS_MONGO_DB_URI

// Connect to the database
const connectDB = async () => {
    try {
        await  mongoose.connect(URI)
        console.log('Database connected successfully')
    } catch (error) {
        console.log(error)
        process.exit(1)
    } 
}
 module.exports = connectDB