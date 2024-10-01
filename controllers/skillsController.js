const skillsData = require('../fetched_data_from_db/skills');

exports.getWebSkills = async (req, res) => {
    let web_skills = await skillsData.func_web_skills();
    res.send(web_skills);
}

exports.getAndroidSkills = async (req, res) => {
    let and_skills = await skillsData.func_Android_skills();
    res.send(and_skills);
}

exports.getCodingSkills = async (req, res) => {
    let coding_skills = await skillsData.func_coding_skills();
    res.send(coding_skills);
}

exports.getToolSkills = async (req, res) => {
    let tools_skills = await skillsData.func_tools_skills();
    res.send(tools_skills);
}