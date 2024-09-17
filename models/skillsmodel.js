const mongoose = require('mongoose');
const skillSchema = new mongoose.Schema({
    name: String,
    image: String,
    level: Number,
    'type': String
    });

    const Skills = mongoose.model('skill', skillSchema)
    module.exports = Skills