const contactReqModel = require('../models/contactRequestsModel');
const connectDB = require('../db');
async function contact_req () {
    try {
        // Ensure the database connection is established
        await connectDB();
        // Fetch all skills from the database
        const projects = await contactReqModel.find({});
        return projects;
    } catch (error) {
        console.error('Error fetching or processing projects:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}

module.exports = { contact_req };