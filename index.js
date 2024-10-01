const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const connectDB = require('./db');
const skillsRouter = require('./routes/skillsRoute');
const projectRouter = require('./routes/projectRoute');
const contactRouter = require('./routes/contactRoute');
const authenticationRouter = require('./routes/authenticationRoute');

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

app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectRouter);
app.use('/api/contact', contactRouter);
app.use('/api/auth',authenticationRouter);

app.get('/assets/:dirr/:slug', (req, res) => {
    res.sendFile(__dirname + `/assets/${req.params.dirr}/${req.params.slug}`);
}
);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});