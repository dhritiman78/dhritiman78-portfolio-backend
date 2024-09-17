const connectDB = require('../db');
const skillsmodel = require('../models/skillsmodel');

let weblink = "http://localhost:3000/assets/weblangicons/";
let OtherLink = "http://localhost:3000/assets/android_and_coding_and_tools_icons/";

async function func_web_skills() {
    try {
        // Ensure the database connection is established
        await connectDB();

        // Fetch all skills from the database
        const web_skills = await skillsmodel.find({ type: 'web' });

        // Map over the skills to update the image URL and level
        const updated_skills = web_skills.map(skill => ({
            ...skill._doc, // Copy the skill object
            image: weblink + skill.image, // Update image URL
            level: skill.level + '%' // Append '%' to level
        }));

        return updated_skills;
    } catch (error) {
        console.error('Error fetching or processing web skills:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}
async function func_Android_skills() {
    try {
        // Ensure the database connection is established
        await connectDB();

        // Fetch all skills from the database
        const web_skills = await skillsmodel.find({ type: 'Android' });

        // Map over the skills to update the image URL and level
        const updated_skills = web_skills.map(skill => ({
            ...skill._doc, // Copy the skill object
            image: OtherLink + skill.image, // Update image URL
            level: skill.level + '%' // Append '%' to level
        }));

        return updated_skills;
    } catch (error) {
        console.error('Error fetching or processing web skills:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}

async function func_coding_skills() {
    try {
        // Ensure the database connection is established
        await connectDB();

        // Fetch all skills from the database
        const web_skills = await skillsmodel.find({ type: 'coding' });

        // Map over the skills to update the image URL and level
        const updated_skills = web_skills.map(skill => ({
            ...skill._doc, // Copy the skill object
            image: OtherLink + skill.image, // Update image URL
            level: skill.level + '%' // Append '%' to level
        }));

        return updated_skills;
    } catch (error) {
        console.error('Error fetching or processing web skills:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}
async function func_tools_skills() {
    try {
        // Ensure the database connection is established
        await connectDB();

        // Fetch all skills from the database
        const web_skills = await skillsmodel.find({ type: 'tools' });

        // Map over the skills to update the image URL and level
        const updated_skills = web_skills.map(skill => ({
            ...skill._doc, // Copy the skill object
            image: OtherLink + skill.image, // Update image URL
            level: skill.level + '%' // Append '%' to level
        }));

        return updated_skills;
    } catch (error) {
        console.error('Error fetching or processing web skills:', error);
        throw error; // Rethrow error to be handled by the caller
    }
}

module.exports = {
    func_web_skills , func_Android_skills , func_coding_skills , func_tools_skills 
};