const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample Route for Portfolio Data
app.get('/api/profile', (req, res) => {
    res.json({
        name: "Aswini Devi",
        role: "Full Stack Developer",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express", "MongoDB"],
        message: "Welcome to my premium full-stack portfolio backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running beautifully on port ${PORT}`);
});
