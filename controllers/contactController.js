const conatctData = require('../fetched_data_from_db/contacts_data');
const ContactModel = require('../models/contactRequestsModel');
const connectDB = require('../db');

exports.getContactRequests = async (req, res) => {
    let contacts = await conatctData.contact_req();
    res.send(contacts);
}

exports.addContactRequest = async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        await connectDB();
        const contact = new ContactModel({ name, phone, email, message });
        await contact.save();
        res.send({ success: true, message: 'Message received!', data: contact }) 
    } catch (error) {
        res.send({ message: 'Something went wrong' })
    }
}

exports.deleteContactRequest = async (req, res) => {
    try {
        await connectDB();
        await ContactModel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
}