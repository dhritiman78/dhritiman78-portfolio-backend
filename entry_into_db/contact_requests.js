const ContactModel = require('../models/contactRequestsModel');
const connectDB = require('../db');

connectDB();

const contactRequest = async (obj) => {
    try {
        const { name, phone, email, message } = obj;
        const contact = new ContactModel({ name, phone, email, message });
        await contact.save();
        return { success: true, message: 'Message received!', data: contact }
    } catch (error) {
        return { message: 'Something went wrong' }
    }
}

module.exports = contactRequest;