require('dotenv').config(); // Ensure you have dotenv to load the environment variables

const login = (req, res) => {
    const { password } = req.body;

    // Check if the password from the request matches the one in the .env file
    if (password === process.env.EXPRESS_PASSWORD) {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ message: 'Incorrect!' });
    }
};

module.exports = { login };
