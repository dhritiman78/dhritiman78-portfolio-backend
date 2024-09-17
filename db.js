const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/dhritimanportfolio'

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