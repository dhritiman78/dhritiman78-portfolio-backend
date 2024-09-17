const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    showincv: {
        type: Boolean,
        required: true
    }
});

const Projects = mongoose.model('project', projectsSchema)
module.exports = Projects
