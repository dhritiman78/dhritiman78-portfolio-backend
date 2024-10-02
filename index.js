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

// CORS Configuration
const allowedOrigins = [process.env.EXPRESS_FRONTEND_URL, process.env.EXPRESS_FRONTEND_PROD_URL];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    return callback(null, true);
  }
}));

// Tackling the CORS
// app.use(cors({
//     origin: process.env.EXPRESS_FRONTEND_URL, // Update this to match your actual frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));
// // Handling preflight requests
// app.options('/api/contact', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', process.env.EXPRESS_FRONTEND_URL);
//     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.send();
// });

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