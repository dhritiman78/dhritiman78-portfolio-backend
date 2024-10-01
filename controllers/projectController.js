const projectData = require('../fetched_data_from_db/projects');
const projectsModel = require('../models/projectsmodel');
const connectDB = require('../db');

exports.getProjects = async (req, res) => {
    let projects = await projectData.func_projects_in_site();
    res.send(projects);
}

exports.getProjectsInCV = async (req, res) => {
    let projects = await projectData.func_projects_in_cv();
    res.send(projects);
}

exports.addProject = async (req, res) => {
    try {
        await connectDB();
        const newProject = req.body;
        const project = await projectsModel.create(newProject);
        project.save();
        res.send({message: "Added project"});
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).send({message: 'Error adding project'});
    }
}

exports.editProject = async (req, res) => {
    try {
        await connectDB();
        const id = req.params.id;
        const updatedProject = req.body;
        await projectsModel.findByIdAndUpdate(id, updatedProject);
        res.send({message: "Updated project"});
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).send({message: 'Error updating project'});
    }
}

exports.deleteProject = async (req, res) => {
    try {
        await connectDB();
        const id = req.params.id;
        await projectsModel.findByIdAndDelete(id);
        res.send({message: "Deleted project"});
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).send({message: 'Error deleting project'});
    }
};