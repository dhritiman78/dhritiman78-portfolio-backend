const projectsModel = require('../models/projectsmodel');
const connectDB = require('../db');
async function func_projects_in_site() {
    try {
        // Ensure the database connection is established
        await connectDB();
        // Fetch all skills from the database
        const projects = await projectsModel.find({});
        return projects;
    } catch (error) {
        console.error('Error fetching or processing projects:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}

async function func_projects_in_cv() {
    try {
        // Ensure the database connection is established
        await connectDB();
        // Fetch all skills from the database
        const projects = await projectsModel.find({showincv: true});
        return projects;
    } catch (error) {
        console.error('Error fetching or processing projects:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}

module.exports = { func_projects_in_site , func_projects_in_cv };