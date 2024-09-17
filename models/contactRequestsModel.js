const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactRequestsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const ContactRequests = mongoose.model('contactRequest', contactRequestsSchema)
module.exports = ContactRequests