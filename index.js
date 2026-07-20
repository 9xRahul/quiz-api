const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const questions = require('./questions.json');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz API! Go to /questions to see the data.');
});

app.get('/ping', (req, res) => {
    res.send('Server is awake');
});

app.get('/questions', (req, res) => {
    res.json(questions);
});

app.get('/questions/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    
    if (isNaN(index) || index < 0 || index >= questions.length) {
        return res.status(404).json({ error: 'Question not found at the specified index' });
    }
    
    res.json(questions[index]);
});

app.listen(PORT, () => {
    console.log(`Quiz API is running on port ${PORT}`);
    
    // Ping itself every 14 minutes to prevent sleep
    setInterval(() => {
        const serverUrl = process.env.SERVER_URL || `http://localhost:${PORT}`;
        const client = serverUrl.startsWith('https') ? https : http;
        
        client.get(`${serverUrl}/ping`, (resp) => {
            console.log(`Self-ping successful: ${resp.statusCode}`);
        }).on('error', (err) => {
            console.error(`Self-ping failed: ${err.message}`);
        });
    }, 14 * 60 * 1000); // 14 minutes
});
