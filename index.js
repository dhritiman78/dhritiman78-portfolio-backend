const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const connectDB = require('./db');
const skillsdata = require('./fetched_data_from_db/skills');
const projectsdata = require('./fetched_data_from_db/projects');
const contact_data = require('./entry_into_db/contact_requests');
const get_contact_data = require('./fetched_data_from_db/contacts_data');
const contactReqModel = require('./models/contactRequestsModel');

// I want to allow my images from aseets weblangicons to be accessed by the client
app.use(express.static('assets/weblangicons'));
app.use(express.static('assets/android_and_coding_and_tools_icons'));
app.use(express.json()); // Ensures the request body is parsed as JSON



// Tackling the CORS
app.use(cors({
    origin: 'http://localhost:5173', // Update this to match your actual frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Handling preflight requests
app.options('/api/contact', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send();
});

app.get('/webskills',async (req, res) => {
    let web_skills = await skillsdata.func_web_skills();
    res.send(web_skills);
});
app.get('/androidskills',async (req, res) => {
    let and_skills = await skillsdata.func_Android_skills();
    res.send(and_skills);
});
app.get('/codingskills',async (req, res) => {
    let coding_skills = await skillsdata.func_coding_skills();
    res.send(coding_skills);
});
app.get('/toolskills',async (req, res) => {
    let tools_skills = await skillsdata.func_tools_skills();
    res.send(tools_skills);
});

app.get('/projects', async (req, res) => {
    let projects = await projectsdata.func_projects_in_site();
    res.send(projects);
});

app.post('/api/contact', async (req, res) => {
    try {
      let result = await contact_data(req.body);
      console.log(result);
      res.send(result);
    } catch (error) {
      res.status(500).send(result);
    }
  });
app.get('/api/contact-requests', async (req, res) => {
    let contacts = await get_contact_data.contact_req();
    res.send(contacts);
});
app.delete('/api/contact-requests/:id', async (req, res) => {
    try {
        await contactReqModel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
});

app.get('/assets/:dirr/:slug', (req, res) => {
    res.sendFile(__dirname + `/assets/${req.params.dirr}/${req.params.slug}`);
}
);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});