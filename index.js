const express = require('express');
const app = express();
const questions = require('./questions.json');
const PORT = process.env.PORT || 3000;

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
});
